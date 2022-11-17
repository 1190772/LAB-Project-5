import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import { Container } from 'typedi';
import IRouteController from '../../controllers/IControllers/IRouteController';

import config from '../../../config';

const route = Router();

export default (app: Router) => {
  app.use('/routes', route);

  const ctrl = Container.get(config.controllers.route.name) as IRouteController;

  route.post(
    '',
    celebrate({
      body: Joi.object({
        idWarehouseStart: Joi.string().required(),
        idWarehouseDestination: Joi.string().required(),
        distance: Joi.number().required(),
        time: Joi.number().required(),
        energy: Joi.number().required(),
      }),
    }),
    (req, res, next) => ctrl.createRoute(req, res, next),
  );

  route.put(
    '',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        idWarehouseStart: Joi.string().required(),
        idWarehouseDestination: Joi.string().required(),
        distance: Joi.number().required(),
        time: Joi.number().required(),
        energy: Joi.number().required(),
      }),
    }),
    (req, res, next) => ctrl.updateRoute(req, res, next),
  );

  route.get('/:id', (req, res, next) => ctrl.getRoute(req, res, next));

  route.get('', (req, res, next) => ctrl.getAllRoutes(req, res, next));
};
