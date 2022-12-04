import { Component, OnInit } from '@angular/core';
import {TruckService} from "../Service/truck.services";
import {RoutesService} from "../Service/routes.service";

@Component({
  selector: 'app-list-routes',
  templateUrl: './list-routes.component.html',
  styleUrls: ['./list-routes.component.css']
})
export class ListRoutesComponent implements OnInit {

  constructor(private service : RoutesService) { }

  ngOnInit(): void {
    this.service.listRoutes();
  }

}
