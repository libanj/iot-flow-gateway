import * as dotenv from "dotenv";

import jsmodbus from "jsmodbus";
import net from "net";
import cron from "cron";

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

function main() {
  try {
    socket.on("connect", () => {
      console.log("CONNECTED");

      //EVERY 15 MINUTES
      const dataUponChangedSchedule: any = createCronJob(
				"0 */15 * * * *",
				() => sendOnlyChangedData(dataUponChange),
        dataUponChange,
        process.env.TIMEZONE
      );
      dataUponChangedSchedule.start();

      //STARTS 06:50AM
      const timeChangeDataScheduleAM: any = createCronJob(
				"0 50 06 * * *",
				() => sendData(timeChangeData),
        timeChangeData,
        process.env.TIMEZONE
      );
			timeChangeDataScheduleAM.start();
			
      //STARTS 06:50PM
      const timeChangeDataSchedulePM: any = createCronJob(
				"0 50 18 * * *",
				() => sendData(timeChangeData),
        timeChangeData,
        process.env.TIMEZONE
      );
      timeChangeDataSchedulePM.start();

      //SEND SHIFT EFFICIENCY DATA
      const shiftEfficiencyData: ModbusPayload[] = [
        {
          value: {
            shiftefficiency: 0,
          },
          fc: 3,
          unitid: 1,
          address: 5036,
          quantity: 1,
        },
      ];

      const shiftEfficiencySchedule: any = createCronJob(
				"0 0 */1 * * *",
				() => sendShiftEfficiencyData(shiftEfficiencyData),
        shiftEfficiencyData,
        process.env.TIMEZONE
      );
      shiftEfficiencySchedule.start();

      //SEND FULL BAGS DATA
      const fullBagsData: ModbusPayload[] = [
        {
          value: {
            fullbags: 0,
          },
          fc: 3,
          unitid: 1,
          address: 5000,
          quantity: 1,
        },
      ];

      const fullBagsSchedule: any = createCronJob(
				"0 0 */1 * * *",
				() => sendFullBagsData(fullBagsData),
        fullBagsData,
        process.env.TIMEZONE
      );
      fullBagsSchedule.start();
    });

    socket.connect(options);
  } catch (error) {
    console.log(error);
  }
}

function createCronJob(
	cronTime: string,
	cronFunction: (dataArray: ModbusPayload[]) => Promise<void>,
  dataArray: ModbusPayload[],
  timezone: string
): any {
  // setting up job schedule
  return new cron.CronJob(
    cronTime,
    async () => cronFunction(dataArray),
    null,
    true,
    timezone
  );
}

async function sendOnlyChangedData(dataArray: ModbusPayload[]): Promise<void> {
  const variablesToSendToCloud: { [key: string]: number } = {};

  for (let i = 0; i < dataArray.length; i++) {
    const payload: ModbusPayload = dataArray[i];
    const registerData = await client.readHoldingRegisters(payload.address, 1);

    const variableKey = Object.keys(payload.value)[0];
    const previousValue = variableMapper.keys[variableKey];
    const currentValue = registerData.response.body.values[0];

    if (previousValue !== currentValue) {
      variableMapper.keys[variableKey] = currentValue;
      variablesToSendToCloud[variableKey] = currentValue;
    }
  }
	await sendModbusDataToUbidots(variablesToSendToCloud);
	
  return Promise.resolve();
}

async function sendData(dataArray: ModbusPayload[]): Promise<void> {
  const variablesToSendToCloud: { [key: string]: number } = {};

  for (let i = 0; i < dataArray.length; i++) {
    const payload: ModbusPayload = dataArray[i];
    const registerData = await client.readHoldingRegisters(payload.address, 1);

    const variableKey = Object.keys(payload.value)[0];
    const currentValue = registerData.response.body.values[0];

    variableMapper.keys[variableKey] = currentValue;
    variablesToSendToCloud[variableKey] = currentValue;
  }
	await sendModbusDataToUbidots(variablesToSendToCloud);
	
  return Promise.resolve();
}

async function sendFullBagsData(payload: ModbusPayload[]): Promise<void> {
  const registerData = await client.readHoldingRegisters(payload[0].address, 1);

  const previousValue: number = variableMapper.keys["fullbags"];
  const currentValue: number = registerData.response.body.values[0];
  let currentHourTotal: number = currentValue - previousValue;

  if (currentHourTotal <= 0) {
    currentHourTotal = currentValue;
  }

  variableMapper.keys["fullbags"] = currentValue;

  await sendModbusDataToUbidots({ fullbags: currentValue });

  return Promise.resolve();
}

async function sendShiftEfficiencyData(
  payload: ModbusPayload[]
): Promise<void> {
  const registerData = await client.readHoldingRegisters(payload[0].address, 1);
  const currentValue: number = registerData.response.body.values[0];
  variableMapper.keys["shiftefficiency"] = currentValue;
	await sendModbusDataToUbidots({ shiftefficiency: currentValue });
  return Promise.resolve();
}

main();
