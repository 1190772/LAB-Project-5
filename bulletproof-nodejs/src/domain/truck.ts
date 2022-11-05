import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

import { Result } from "../core/logic/Result";
import { TruckId } from "./truckId";

import ITruckDTO from "../dto/ITruckDTO";

interface TruckProps {
  name: string;
}

export class Truck extends AggregateRoot<TruckProps> {
  get id (): UniqueEntityID {
    return this._id;
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
  private constructor (props: TruckProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (truckDTO: ITruckDTO, id?: UniqueEntityID): Result<Truck> {
    const name = truckDTO.name;

    if (!!name === false || name.length === 0) {
      return Result.fail<Truck>('Must provide a truck name')
    } else {
      const truck = new Truck({ name: name }, id);
      return Result.ok<Truck>( truck )
    }
  }
}
