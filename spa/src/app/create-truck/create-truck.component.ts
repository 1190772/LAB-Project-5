import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onTruckCreate(trucks:{tLicencePlate:string,tName:string,tTare:string,tMaximumLoad:string,tBateryCapacity:string,tAutonomy:string,tChargingTime:string}) {
    console.log(trucks);
    this.http.post('https://lapr5dummydb-default-rtdb.europe-west1.firebasedatabase.app/trucks.json',trucks)
      .subscribe((res)=>{
        console.log(res);
      })
  }

}
