import {AggregateRoot} from '../core/domain/AggregateRoot';
import {UniqueEntityID} from '../core/domain/UniqueEntityID';

import {Result} from '../core/logic/Result';
import {RouteId} from './routeId';

import IRouteDTO from '../dto/IRouteDTO';

interface RouteProps {
  idWarehouseStart: string;
  idWarehouseDestination: string;
  distance: number;
  time: number;
  energy: number;
}

export class Route extends AggregateRoot<RouteProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get routeId(): RouteId {
    return new RouteId(this.routeId.toValue());
  }

  get idWarehouseStart(): string {
    return this.props.idWarehouseStart;
  }

  set idWarehouseStart(value: string) {
    this.props.idWarehouseStart = value;
  }

  get idWarehouseDestination(): string {
    return this.props.idWarehouseDestination;
  }

  set idWarehouseDestination(value: string) {
    this.props.idWarehouseDestination = value;
  }

  get distance(): number {
    return this.props.distance;
  }

  set distance(value: number) {
    this.props.distance = value;
  }

  get time(): number {
    return this.props.time;
  }

  set time(value: number) {
    this.props.time = value;
  }

  get energy(): number {
    return this.props.energy;
  }

  set energy(value: number) {
    this.props.energy = value;
  }

  private constructor(props: RouteProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(routeDTO: IRouteDTO, id?: UniqueEntityID): Result<Route> {
    const idWarehouseStart = routeDTO.idWarehouseStart;
    const idWarehouseDestination = routeDTO.idWarehouseDestination;
    const distance = routeDTO.distance;
    const time = routeDTO.time;
    const energy = routeDTO.energy;

    if (energy < 1) {
      return Result.fail<Route>('Must provide the energy necessary to make the route');
    }
    if (time < 1) {
      return Result.fail<Route>('Must provide the time that the route takes');
    }
    if (distance < 0.1) {
      return Result.fail<Route>('Must provide the distance of the route');
    }
    if (!!idWarehouseDestination === false || idWarehouseDestination.length === 0) {
      return Result.fail<Route>('Must provide a the ID of the Destination Warehouse');
    }
    if (!!idWarehouseStart === false || idWarehouseStart.length === 0) {
      return Result.fail<Route>('Must provide a the ID of the Starting Warehouse');
    } else {
      const route = new Route(
        {
          idWarehouseStart: idWarehouseStart,
          idWarehouseDestination: idWarehouseDestination,
          distance: distance,
          time: time,
          energy: energy,
        },
        id,
      );
      return Result.ok<Route>(route);
    }
  }
}
