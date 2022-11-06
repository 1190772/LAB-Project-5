import {Inject, Service} from 'typedi';
import config from '../../config';
import IRouteDTO from '../dto/IRouteDTO';
import {Route} from '../domain/route';
import IRouteRepo from '../services/IRepos/IRouteRepo';
import IRouteService from './IServices/IRouteService';
import {Result} from '../core/logic/Result';
import {RouteMap} from '../mappers/RouteMap';

@Service()
export default class RouteService implements IRouteService {
  constructor(@Inject(config.repos.route.name) private routeRepo: IRouteRepo) {
  }

  public async getRoute(routeId: string): Promise<Result<IRouteDTO>> {
    try {
      const route = await this.routeRepo.findByDomainId(routeId);

      if (route === null) {
        return Result.fail<IRouteDTO>('Route not found');
      } else {
        const routeDTOResult = RouteMap.toDTO(route) as IRouteDTO;
        return Result.ok<IRouteDTO>(routeDTOResult);
      }
    } catch (e) {
      throw e;
    }
  }

  public async createRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
    try {
      const routeOrError = await Route.create(routeDTO);

      if (routeOrError.isFailure) {
        return Result.fail<IRouteDTO>(routeOrError.errorValue());
      }

      const routeResult = routeOrError.getValue();

      await this.routeRepo.save(routeResult);

      const routeDTOResult = RouteMap.toDTO(routeResult) as IRouteDTO;
      return Result.ok<IRouteDTO>(routeDTOResult);
    } catch (e) {
      throw e;
    }
  }

  public async updateRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
    try {
      const route = await this.routeRepo.findByDomainId(routeDTO.id);

      if (route === null) {
        return Result.fail<IRouteDTO>('Route not found');
      } else {
        route.idWarehouseStart = routeDTO.idWarehouseStart;
        route.idWarehouseDestination = routeDTO.idWarehouseDestination;
        route.distance = routeDTO.distance;
        route.time = routeDTO.time;
        route.energy = routeDTO.energy;
        await this.routeRepo.save(route);

        const routeDTOResult = RouteMap.toDTO(route) as IRouteDTO;
        return Result.ok<IRouteDTO>(routeDTOResult);
      }
    } catch (e) {
      throw e;
    }
  }
}
