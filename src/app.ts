import * as dotenv from "dotenv";

import jsmodbus from "jsmodbus";
import net from "net";
import cron from "cron";

import {
  fullBagsData,
  shiftEfficiencyData,
  dataUponChange,
  timeChangeData,
} from "./models/modbus/payload-data";
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

const main = (): void => {
  try {
    socket.on("connect", () => {
      console.log("CONNECTED");

      //EVERY 15 MINUTES
      const dataUponChangedSchedule: any = createCronJob(
        "0 */15 * * * *",
        () => sendOnlyChangedData(dataUponChange),
        process.env.TIMEZONE
      );
      dataUponChangedSchedule.start();

      //STARTS 06:50AM
      const timeChangeDataScheduleAM: any = createCronJob(
        "0 50 06 * * *",
        () => sendData(timeChangeData),
        process.env.TIMEZONE
      );
      timeChangeDataScheduleAM.start();

      //STARTS 06:50PM
      const timeChangeDataSchedulePM: any = createCronJob(
        "0 50 18 * * *",
        () => sendData(timeChangeData),
        process.env.TIMEZONE
      );
      timeChangeDataSchedulePM.start();

      //SEND SHIFT EFFICIENCY DATA
      const shiftEfficiencySchedule: any = createCronJob(
        "0 0 */1 * * *",
        () => sendShiftEfficiencyData(),
        process.env.TIMEZONE
      );
      shiftEfficiencySchedule.start();

      //SEND FULL BAGS DATA
      const fullBagsSchedule: any = createCronJob(
        "0 0 */1 * * *",
        () => sendFullBagsData(),
        process.env.TIMEZONE
      );
      fullBagsSchedule.start();
    });

    socket.connect(options);
  } catch (error) {
    console.log(error);
  }
};

const createCronJob = (
  cronTime: string,
  cronFunction: () => Promise<void>,
  timezone: string
): any => {
  // setting up job schedule
  return new cron.CronJob(
    cronTime,
    async () => cronFunction(),
    null,
    true,
    timezone
  );
};

const sendOnlyChangedData = async (
  dataArray: ModbusPayload[]
): Promise<void> => {
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
};

const sendData = async (dataArray: ModbusPayload[]): Promise<void> => {
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
};

const sendFullBagsData = async (): Promise<void> => {
  const registerData = await client.readHoldingRegisters(
    fullBagsData.address,
    1
  );
  const currentValue: number = registerData.response.body.values[0];
  const previousValue: number = variableMapper.keys["fullbags"];
  let currentHourTotal: number = currentValue - previousValue;
  if (currentHourTotal <= 0) currentHourTotal = currentValue;

  variableMapper.keys["fullbags"] = currentValue;
  await sendModbusDataToUbidots({ fullbags: currentValue });
  return Promise.resolve();
};

const sendShiftEfficiencyData = async (): Promise<void> => {
  const registerData = await client.readHoldingRegisters(
    shiftEfficiencyData.address,
    1
  );
  const currentValue: number = registerData.response.body.values[0];
  variableMapper.keys["shiftefficiency"] = currentValue;
  await sendModbusDataToUbidots({ shiftefficiency: currentValue });
  return Promise.resolve();
};

main();
