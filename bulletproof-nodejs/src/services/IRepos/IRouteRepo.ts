import {Repo} from '../../core/infra/Repo';
import {Route} from '../../domain/route';
import {RouteId} from '../../domain/routeId';

export default interface IRouteRepo extends Repo<Route> {
  save(route: Route): Promise<Route>;

  findByDomainId(routeId: RouteId | string): Promise<Route>;

  //findByIds (routesIds: RouteId[]): Promise<Route[]>;
  //saveCollection (routes: Route[]): Promise<Route[]>;
  //removeByRouteIds (routes: RouteId[]): Promise<any>
}
