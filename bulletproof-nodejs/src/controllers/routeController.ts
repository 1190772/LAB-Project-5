import {NextFunction, Request, Response} from 'express';
import {Inject, Service} from 'typedi';
import config from '../../config';

import IRouteController from './IControllers/IRouteController';
import IRouteService from '../services/IServices/IRouteService';
import IRouteDTO from '../dto/IRouteDTO';

import {Result} from '../core/logic/Result';

@Service() // @ts-ignore
export default class RouteController implements IRouteController /* TODO: extends ../core/infra/BaseController */ {
  constructor(@Inject(config.services.route.name) private routeServiceInstance: IRouteService) {
  }

  public async createRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const routeOrError = (await this.routeServiceInstance.createRoute(req.body as IRouteDTO)) as Result<IRouteDTO>;

      if (routeOrError.isFailure) {
        return res.status(400).send();
      }

      const routeDTO = routeOrError.getValue();
      return res.json(routeDTO).status(201);
    } catch (e) {
      return next(e);
    }
  }

  public async updateRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const routeOrError = (await this.routeServiceInstance.updateRoute(req.body as IRouteDTO)) as Result<IRouteDTO>;

      if (routeOrError.isFailure) {
        return res.status(400).send();
      }

      const routeDTO = routeOrError.getValue();
      return res.status(201).json(routeDTO);
    } catch (e) {
      return next(e);
    }
  }

  public async getRoute(req: Request, res: Response, next: NextFunction) {
    try {
      const routeOrError = (await this.routeServiceInstance.getRoute((req.body as IRouteDTO).id)) as Result<IRouteDTO>;
      const routeDTO = routeOrError.getValue();
      return res.status(201).json(routeDTO);
    } catch (e) {
      return next(e);
    }
  }
}
