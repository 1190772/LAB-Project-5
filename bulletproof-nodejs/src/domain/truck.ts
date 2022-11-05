import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import { TruckId } from "./truckId";

import ITruckDTO from "../dto/ITruckDTO";

interface TruckProps {
  name: string;
  tare: number;
  maximumLoad: number;
  batteryCapacity: number;
  autonomy: number;
  chargingTime: number;
}

export class Truck extends AggregateRoot<TruckProps> {
  get id (): UniqueEntityID {
    return this._id;
  }



  private constructor (props: TruckProps, id?: UniqueEntityID) {
    super(props, id);
  }


  public static create (truckDTO: ITruckDTO, id?: UniqueEntityID): Result<Truck> {
    const name = truckDTO.name;
    const tare = truckDTO.tare;
    const maximumLoad = truckDTO.maximumLoad;
    const batteryCapacity = truckDTO.batteryCapacity;
    const autonomy = truckDTO.autonomy;
    const chargingTime = truckDTO.chargingTime;



    if (!!name === false || name.length === 0) {
      return Result.fail<Truck>('Must provide a truck name')
    } else if (!!tare === false || tare == 0) {
      return Result.fail<Truck>('Must provide a truck tare')
    }  else if (!!maximumLoad === false || maximumLoad == 0) {
      return Result.fail<Truck>('Must provide a truck maximumLoad')
    }  else if (!!batteryCapacity === false || batteryCapacity == 0) {
      return Result.fail<Truck>('Must provide a truck batteryCapacity')
    }  else if (!!autonomy === false || autonomy == 0) {
      return Result.fail<Truck>('Must provide a truck autonomy')
    }  else if (!!chargingTime === false || chargingTime == 0) {
      return Result.fail<Truck>('Must provide a truck chargingTime')
    } else {
      const truck = new Truck({autonomy: autonomy, batteryCapacity: batteryCapacity, chargingTime: chargingTime, maximumLoad: maximumLoad, tare: tare, name: name }, id);
      return Result.ok<Truck>( truck )
    }


  }



  get truckId (): TruckId {
    return new TruckId(this.truckId.toValue());
  }




  get name (): string {
    return this.props.name;
  }

  set name ( value: string) {
    this.props.name = value;
  }



  get tare (): number {
    return this.props.tare;
  }

  set tare ( value: number) {
    this.props.tare = value;
  }



  get maximumLoad (): number {
    return this.props.maximumLoad;
  }

  set maximumLoad ( value: number) {
    this.props.maximumLoad = value;
  }



  get batteryCapacity (): number {
    return this.props.batteryCapacity;
  }

  set batteryCapacity ( value: number) {
    this.props.batteryCapacity = value;
  }



  get autonomy (): number {
    return this.props.autonomy;
  }

  set autonomy ( value: number) {
    this.props.autonomy = value;
  }



  get chargingTime (): number {
    return this.props.chargingTime;
  }

  set chargingTime ( value: number) {
    this.props.chargingTime = value;
  }





}
