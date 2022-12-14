import { Inject, Service } from 'typedi';

import IRouteRepo from '../services/IRepos/IRouteRepo';
import { Route } from '../domain/route';
import { RouteId } from '../domain/routeId';
import { RouteMap } from '../mappers/RouteMap';

import { Document, FilterQuery, Model } from 'mongoose';
import { IRoutePersistence } from '../dataschema/IRoutePersistence';

@Service()
export default class RouteRepo implements IRouteRepo {
  private models: any;

  constructor(@Inject('routeSchema') private routeSchema: Model<IRoutePersistence & Document>) {}

  private createBaseQuery(): any {
    return {
      where: {},
    };
  }

  public async exists(route: Route): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
    const idX = route.id instanceof RouteId ? (<RouteId>route.id).toValue() : route.id;

    const query = { domainId: idX };
    const routeDocument = await this.routeSchema.findOne(query as FilterQuery<IRoutePersistence & Document>);

    return !!routeDocument === true;
  }

  public async save(route: Route): Promise<Route> {
    const query = { domainId: route.id.toString() };

    const routeDocument = await this.routeSchema.findOne(query);

    try {
      if (routeDocument === null) {
        const rawRoute: any = RouteMap.toPersistence(route);

        const routeCreated = await this.routeSchema.create(rawRoute);

        return RouteMap.toDomain(routeCreated);
      } else {
        routeDocument.idWarehouseStart = route.idWarehouseStart;
        routeDocument.idWarehouseDestination = route.idWarehouseDestination;
        routeDocument.distance = route.distance;
        routeDocument.time = route.time;
        routeDocument.energy = route.energy;
        await routeDocument.save();

        return route;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId(routeId: RouteId | string): Promise<Route> {
    const query = { domainId: routeId };
    const routeRecord = await this.routeSchema.findOne(query as FilterQuery<IRoutePersistence & Document>);

    if (routeRecord != null) {
      return RouteMap.toDomain(routeRecord);
    } else return null;
  }

  public async findAll(): Promise<Route[]> {
    const routes = await this.routeSchema.find();
    const rs = [];
    for (let i = 0; i < routes.length; i++) {
      rs.push(RouteMap.toDomain(routes[i]));
    }
    return rs;
  }
}
