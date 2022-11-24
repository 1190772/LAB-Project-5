import * as sinon from 'sinon';

import { Response, Request, NextFunction } from 'express';

import { Container } from 'typedi';
import config from '../../config';

import { Result } from '../core/logic/Result';

import IRouteService from '../services/IServices/IRouteService';
import RouteController from './routeController';
import IRouteDTO from '../dto/IRouteDTO';

describe('route controller', function() {
  beforeEach(function() {});

  it('createRoute: returns json with id+idWarehouseStart+idWarehouseDestination+distance+time+energy values', async function() {
    let body = { idWarehouseStart: '1', idWarehouseDestination: '2', distance: 100, time: 50, energy: 30 };
    let req: Partial<Request> = {};
    req.body = body;

    let res: Partial<Response> = {
      json: sinon.spy(),
    };
    let next: Partial<NextFunction> = () => {};

    let routeServiceClass = require(config.services.route.path).default;
    let routeServiceInstance = Container.get(routeServiceClass);
    Container.set(config.services.route.idWarehouseStart, routeServiceInstance);
    Container.set(config.services.route.idWarehouseDestination, routeServiceInstance);
    Container.set(config.services.route.distance, routeServiceInstance);
    Container.set(config.services.route.time, routeServiceInstance);
    Container.set(config.services.route.energy, routeServiceInstance);

    routeServiceInstance = Container.get(config.services.route.idWarehouseStart);
    sinon.stub(routeServiceInstance, 'createRole').returns(
      Result.ok<IRouteDTO>({
        id: '123',
        idWarehouseStart: req.body.idWarehouseStart,
        idWarehouseDestination: req.body.idWarehouseDestination,
        distance: req.body.distance,
        time: req.body.time,
        energy: req.body.energy,
      }),
    );

    const ctrl = new RouteController(routeServiceInstance as IRouteService);

    await ctrl.createRoute(<Request>req, <Response>res, <NextFunction>next);

    sinon.assert.calledOnce(res.json);
    sinon.assert.calledWith(res.json, sinon.match({ id: '123', name: req.body.name }));
  });
});
