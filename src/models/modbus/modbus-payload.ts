export interface ModbusPayload {
  value?: {
    [key: string]: any;
  };
  fc: number;
  unitid: number;
  address: number;
  quantity: number;
}
