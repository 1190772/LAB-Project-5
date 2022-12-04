import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';
import ITruckController from '../../controllers/IControllers/ITruckController';

import config from '../../../config';

const route = Router();

export default (app: Router) => {
  app.use('/trucks', route);

  const ctrl = Container.get(config.controllers.truck.name) as ITruckController;

  route.post(
    '',
    celebrate({
      body: Joi.object({
        tare: Joi.number().required(),
        maximumLoad: Joi.number().required(),
        batteryCapacity: Joi.number().required(),
        autonomy: Joi.number().required(),
        chargingTime: Joi.number().required(),
      }),
    }),
    (req, res, next) => ctrl.createTruck(req, res, next),
  );

  route.put(
    '',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        tare: Joi.number().required(),
        maximumLoad: Joi.number().required(),
        batteryCapacity: Joi.number().required(),
        autonomy: Joi.number().required(),
        chargingTime: Joi.number().required(),
      }),
    }),
    (req, res, next) => ctrl.updateTruck(req, res, next),
  );

  route.get('/:id', (req, res, next) => ctrl.getTruck(req, res, next));

  route.get('', (req, res, next) => ctrl.getAllTrucks(req, res, next));
};
