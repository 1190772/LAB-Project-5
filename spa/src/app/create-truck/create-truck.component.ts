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
  onTruckCreate(trucks:{tLicensePlate: string, tTare:number, tMaximumLoad:number, tBatteryCapacity:number, tAutonomy:number, tChargingTime:number}) {
    const obj={
      licensePlate:trucks.tLicensePlate,tare:trucks.tTare,maximumLoad:trucks.tMaximumLoad,batteryCapacity:trucks.tBatteryCapacity,
      autonomy:trucks.tAutonomy,chargingTime:trucks.tChargingTime
    }as TruckDTO

    this.truckService.createTruck(obj);
  }

}
