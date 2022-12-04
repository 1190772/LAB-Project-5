export interface ITruckPersistence {
  domainId: string;
  licensePlate: string,
  tare: number;
  maximumLoad: number;
  batteryCapacity: number;
  autonomy: number;
  chargingTime: number;
}
