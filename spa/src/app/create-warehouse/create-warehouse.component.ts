import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

  }
  onWarehouseCreate(warehouses:{wName:string,wCountry:string,wDoorNumber:string,wLongitude:string,wLatitude:string,wAltitude:string,wDesc:string}) {
    console.log(warehouses);
    this.http.post('https://lapr5dummydb-default-rtdb.europe-west1.firebasedatabase.app/warehouses.json',warehouses)
      .subscribe((res)=>{
        console.log(res);
      })
  }
}
