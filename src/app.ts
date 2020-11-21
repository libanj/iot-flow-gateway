import * as dotenv from "dotenv";

import jsmodbus from "jsmodbus";
import net from "net";

import { interval, Subscription } from "rxjs";

import { dataUponChange, timeChangeData } from "./models/modbus/payload-data";
import { ModbusPayload } from "./models/modbus/modbus-payload";
import { ModbusVariableMapper } from "./models/modbus/modbus-variable-mapper";

dotenv.config();

const variableMapper = new ModbusVariableMapper();

const socket = new net.Socket();
const unitID: number = 1;
const client = new jsmodbus.client.TCP(socket, unitID);
const options: net.SocketConnectOpts = {
  host: process.env.HOST,
  port: parseInt(process.env.MODBUS_PORT),
};

let interval_$: Subscription;

function main() {
  try {
    socket.on("connect", () => {
      console.log("CONNECTED");

      interval_$ = interval(5000).subscribe(() => {
        sendOnlyChangedData();
      });
    });

    socket.connect(options);
  } catch (error) {
    console.log(error);
    interval_$.unsubscribe();
  }
}

async function sendOnlyChangedData(): Promise<void> {
  const variablesToSendToCloud: any[] = [];

  for (let i = 0; i < dataUponChange.length; i++) {
    const payload: ModbusPayload = dataUponChange[i];
    const registerData = await client.readHoldingRegisters(payload.address, 1);

    const variableKey = Object.keys(payload.value)[0];
    const previousValue = variableMapper.keys[variableKey];
    const currentValue = registerData.response.body.values[0];

    if (previousValue !== currentValue) {
      variableMapper.keys[variableKey] = currentValue;
      variablesToSendToCloud.push({ [variableKey]: currentValue });
    }
  }

  console.log(variablesToSendToCloud);
  console.log("\n");

  return Promise.resolve();
}

main();
