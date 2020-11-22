import * as dotenv from "dotenv";

import jsmodbus from "jsmodbus";
import net from "net";

import { interval, Subscription } from "rxjs";

import { dataUponChange, timeChangeData } from "./models/modbus/payload-data";
import { ModbusPayload } from "./models/modbus/modbus-payload";
import { ModbusVariableMapper } from "./models/modbus/modbus-variable-mapper";
import { sendModbusDataToUbidots } from "./ubidots-data-sender";

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
      // console.log("CONNECTED");

      interval_$ = interval(parseInt(process.env.INTERVAL_TIME)).subscribe(() => {
        sendOnlyChangedData();
      });
    });

    socket.connect(options);
  } catch (error) {
    // console.log(error);
    interval_$.unsubscribe();
  }
}

async function sendOnlyChangedData(): Promise<void> {
  const variablesToSendToCloud: { [key: string]: number } = {};

  for (let i = 0; i < dataUponChange.length; i++) {
    const payload: ModbusPayload = dataUponChange[i];
    const registerData = await client.readHoldingRegisters(payload.address, 1);

    const variableKey = Object.keys(payload.value)[0];
    const previousValue = variableMapper.keys[variableKey];
    const currentValue = registerData.response.body.values[0];

    if (previousValue !== currentValue) {
      variableMapper.keys[variableKey] = currentValue;
      variablesToSendToCloud[variableKey] = currentValue;
    }
  }

  // console.log(variablesToSendToCloud);
  // console.log("\n");

  await sendModbusDataToUbidots(variablesToSendToCloud);

  return Promise.resolve();
}

main();
