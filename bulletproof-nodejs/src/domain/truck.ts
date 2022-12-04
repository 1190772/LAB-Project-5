import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import { TruckId } from "./truckId";

import ITruckDTO from "../dto/ITruckDTO";

interface TruckProps {
  licensePlate: string;
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

  get truckId(): TruckId {
    return new TruckId(this.truckId.toValue());
  }

  get licensePlate(): string {
    return this.props.licensePlate;
  }

  set licensePlate(value: string) {
    this.props.licensePlate = value;
  }

  get tare(): number {
    return this.props.tare;
  }

  set tare(value: number) {
    this.props.tare = value;
  }

  get maximumLoad(): number {
    return this.props.maximumLoad;
  }

  set maximumLoad(value: number) {
    this.props.maximumLoad = value;
  }

  get batteryCapacity(): number {
    return this.props.batteryCapacity;
  }

  set batteryCapacity(value: number) {
    this.props.batteryCapacity = value;
  }

  get autonomy(): number {
    return this.props.autonomy;
  }

  set autonomy(value: number) {
    this.props.autonomy = value;
  }

  get chargingTime(): number {
    return this.props.chargingTime;
  }

  set chargingTime(value: number) {
    this.props.chargingTime = value;
  }

  private constructor (props: TruckProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(truckDTO: ITruckDTO, id?: UniqueEntityID): Result<Truck> {
    const licensePlate = truckDTO.licensePlate;
    const tare = truckDTO.tare;
    const maximumLoad = truckDTO.maximumLoad;
    const batteryCapacity = truckDTO.batteryCapacity;
    const autonomy = truckDTO.autonomy;
    const chargingTime = truckDTO.chargingTime;

    if (!!licensePlate === false || licensePlate.length === 0) {
      return Result.fail<Truck>('Must provide a license plate');
    }
    if (!!tare === false || tare == 0) {
      return Result.fail<Truck>('Must provide a truck tare');
    }
    if (!!maximumLoad === false || maximumLoad == 0) {
      return Result.fail<Truck>('Must provide a truck maximumLoad');
    }
    if (!!batteryCapacity === false || batteryCapacity == 0) {
      return Result.fail<Truck>('Must provide a truck batteryCapacity');
    }
    if (!!autonomy === false || autonomy == 0) {
      return Result.fail<Truck>('Must provide a truck autonomy');
    }
    if (!!chargingTime === false || chargingTime == 0) {
      return Result.fail<Truck>('Must provide a truck chargingTime');
    } else {
      const truck = new Truck(
        {
          licensePlate: licensePlate,
          tare: tare,
          maximumLoad: maximumLoad,
          batteryCapacity: batteryCapacity,
          autonomy: autonomy,
          chargingTime: chargingTime,
        },
        id,
      );
      return Result.ok<Truck>(truck);
    }
  }
}
