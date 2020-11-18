import express from 'express'
import { Request, Response }  from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import { data } from './models/modbus/payload-data'

// Create a new express app instance
const app: express.Application = express();
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));


app.get("/", (req: any, res: any) =>  {
  res.send(data);
});

app.listen(process.env.PORT || 8080, () => {
  console.log("App is listening on port 8080!");
});