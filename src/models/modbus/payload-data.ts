import { ModbusPayload } from "./modbus-payload";

export const data: ModbusPayload[] = [
  {
    value: { 
			lowproducttime: 0
		},
    fc: 3,
    unitid: 1,
    address: 3000,
    quantity: 1,
  },
  {
    value: {
      robaguptime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3004,
    quantity: 1,
  },
  {
    value: {
      interlocktime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3008,
    quantity: 1,
  },
  {
    value: {
      runtime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3010,
    quantity: 1,
  },
  {
    value: {
      pausedtime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3012,
    quantity: 1,
  },
  {
    value: {
      faulttime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3014,
    quantity: 1,
  },
  {
    value: {
      outoffilmtime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 3016,
    quantity: 1,
  },
];
