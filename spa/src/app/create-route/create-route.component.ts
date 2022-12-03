import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RoutesService, RouteDTO} from "../Service/routes.service";

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {

  constructor(private http: HttpClient, private routeService: RoutesService) { }

  ngOnInit(): void {
  }

  onRouteCreate(routes: { rWarehouseStart: string, rWarehouseDestination: string, rDistance: number, rTime: number, rEnergy: number }) {

    const obj = {
      idWarehouseStart: routes.rWarehouseStart, idWarehouseDestination: routes.rWarehouseDestination
      , distance: routes.rDistance, time: routes.rTime, energy: routes.rEnergy
    } as RouteDTO

    this.routeService.createRoute(obj);
  }

}
