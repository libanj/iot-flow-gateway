// import express from 'express'
// import { Request, Response }  from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser'
// import { data } from './models/modbus/payload-data'

// // Create a new express app instance
// const app: express.Application = express();
// app.use(express.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(cors({origin: true, credentials: true}));


// app.get("/", (req: any, res: any) =>  {
//   res.send(data);
// });

// app.listen(process.env.PORT || 8080, () => {
//   console.log("App is listening on port 8080!");
// });

// create a tcp modbus client
import Modbus from 'jsmodbus';
import net from 'net';

const socket = new net.Socket()
const unitID : number = 1;
const client  = new Modbus.client.TCP(socket, unitID);
const options = {
	'host' : '192.168.1.152',
	'port' : 10502
}

socket.on('connect', () => {
	console.log("CONNECTED");
	client.readHoldingRegisters(3000, 2).then( (resp) => { console.log(resp.response.body); }, console.error);
	
});
	 
socket.connect(options)