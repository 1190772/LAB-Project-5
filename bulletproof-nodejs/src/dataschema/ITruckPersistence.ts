export interface ITruckPersistence {
  domainId: string;
  tare: number;
  maximumLoad: number;
  batteryCapacity: number;
  autonomy: number;
  chargingTime: number;
}
