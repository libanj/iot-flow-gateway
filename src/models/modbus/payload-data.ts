import { ModbusPayload } from "./modbus-payload";

export const fullBagsData: ModbusPayload = {
  value: {
    fullbags: 0,
  },
  fc: 3,
  unitid: 1,
  address: 5000,
  quantity: 1,
};

export const shiftEfficiencyData: ModbusPayload = {
  value: {
    shiftefficiency: 0,
  },
  fc: 3,
  unitid: 1,
  address: 5036,
  quantity: 1,
};

export const timeChangeData: ModbusPayload[] = [
  {
    value: {
      lowproducttime: 0,
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

export const dataUponChange: ModbusPayload[] = [
  {
    value: {
      targetweight: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5010,
    quantity: 1,
  },
  {
    value: {
      baglength: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5014,
    quantity: 1,
  },
  {
    value: {
      bagsperminute: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5016,
    quantity: 1,
  },
  {
    value: {
      topconehigh: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5032,
    quantity: 1,
  },
  {
    value: {
      topconelow: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5034,
    quantity: 1,
  },
  {
    value: {
      highlimitweight: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5048,
    quantity: 1,
  },
  {
    value: {
      sealtime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5050,
    quantity: 1,
  },
  {
    value: {
      striplength: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5052,
    quantity: 1,
  },
  {
    value: {
      falltime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5054,
    quantity: 1,
  },
  {
    value: {
      nominalweight: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5064,
    quantity: 1,
  },
  {
    value: {
      tne: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5066,
    quantity: 1,
  },
  {
    value: {
      fbdelay2: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5092,
    quantity: 1,
  },
  {
    value: {
      lvfdelay: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5094,
    quantity: 1,
  },
  {
    value: {
      wbdelay: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5098,
    quantity: 1,
  },
  {
    value: {
      wbopentime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5100,
    quantity: 1,
  },
  {
    value: {
      fbopentime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5104,
    quantity: 1,
  },
  {
    value: {
      staggerdelay: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5106,
    quantity: 1,
  },
  {
    value: {
      lowlowlimit: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5108,
    quantity: 1,
  },
  {
    value: {
      biasweight: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5110,
    quantity: 1,
  },
  {
    value: {
      striptime: 0,
    },
    fc: 3,
    unitid: 1,
    address: 5112,
    quantity: 1,
  },
];
