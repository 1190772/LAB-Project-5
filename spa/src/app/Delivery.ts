export class Delivery{
  id: string;
  weight: number;
  warehouseId: string;
  inTime: number;
  outTime: number;

  constructor(id: string, weight: number, warehouseId: string, inTime: number, outTime: number){
    this.id = id;
    this.weight= weight;
    this.warehouseId = warehouseId;
    this.inTime = inTime;
    this.outTime = outTime;
}

}
