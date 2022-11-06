import {Mapper} from '../core/infra/Mapper';

import {Document, Model} from 'mongoose';
import {IRoutePersistence} from '../dataschema/IRoutePersistence';

import IRouteDTO from '../dto/IRouteDTO';
import {Route} from '../domain/route';

import {UniqueEntityID} from '../core/domain/UniqueEntityID';

export class RouteMap extends Mapper<Route> {
  public static toDTO(route: Route): IRouteDTO {
    // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
    return {
      id: route.id.toString(),
      idWarehouseStart: route.idWarehouseStart,
      idWarehouseDestination: route.idWarehouseDestination,
      distance: route.distance,
      time: route.time,
      energy: route.energy,
    } as IRouteDTO;
  }

  public static toDomain(route: any | Model<IRoutePersistence & Document>): Route {
    const routeOrError = Route.create(route, new UniqueEntityID(route.domainId));

    routeOrError.isFailure ? console.log(routeOrError.error) : '';

    return routeOrError.isSuccess ? routeOrError.getValue() : null;
  }

  public static toPersistence(route: Route): any {
    return {
      domainId: route.id.toString(),
      idWarehouseStart: route.idWarehouseStart,
      idWarehouseDestination: route.idWarehouseDestination,
      distance: route.distance,
      time: route.time,
      energy: route.energy,
    };
  }
}
