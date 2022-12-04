import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TruckDTO, TruckService} from "../Service/truck.services";

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {

  constructor(private http:HttpClient,private truckService: TruckService) { }

  ngOnInit(): void {
  }
  onTruckCreate(trucks:{idTruck: string,tTare:string,tMaximumLoad:string,tBateryCapacity:string,tAutonomy:string,tChargingTime:string}) {
    const obj={
      idTruck: trucks.idTruck, tTare:trucks.tTare,tMaximumLoad:trucks.tMaximumLoad,tBateryCapacity:trucks.tBateryCapacity,
      tAutonomy:trucks.tAutonomy,tChargingTime:trucks.tChargingTime
    }as TruckDTO

    this.truckService.createRoute(obj);
  }

}
