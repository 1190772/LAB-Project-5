import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from '../../config';

import ITruckController from './IControllers/ITruckController';
import ITruckService from '../services/IServices/ITruckService';
import ITruckDTO from '../dto/ITruckDTO';

import { Result } from '../core/logic/Result';

@Service()
export default class TruckController implements ITruckController {
  constructor(@Inject(config.services.truck.name) private truckServiceInstance: ITruckService) {}

  public async createTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = (await this.truckServiceInstance.createTruck(req.body as ITruckDTO)) as Result<ITruckDTO>;

      if (truckOrError.isFailure) {
        return res.status(400).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.status(201).json(truckDTO);
    } catch (e) {
      return next(e);
    }
  }

  public async updateTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = (await this.truckServiceInstance.updateTruck(req.body as ITruckDTO)) as Result<ITruckDTO>;

      if (truckOrError.isFailure) {
        return res.status(404).send();
      }

      const truckDTO = truckOrError.getValue();
      return res.status(201).json(truckDTO);
    } catch (e) {
      return next(e);
    }
  }

  public async getTruck(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = (await this.truckServiceInstance.getTruck(req.params.id)) as Result<ITruckDTO>;
      const truckDTO = truckOrError.getValue();
      return res.status(200).json(truckDTO);
    } catch (e) {
      return next(e);
    }
  }

  public async getAllTrucks(req: Request, res: Response, next: NextFunction) {
    try {
      const truckOrError = (await this.truckServiceInstance.getAllTrucks()) as Result<ITruckDTO[]>;
      const truckDTO = truckOrError.getValue();
      return res.status(200).json(truckDTO);
    } catch (e) {
      return next(e);
    }
  }
}
