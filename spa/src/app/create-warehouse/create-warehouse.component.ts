import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {WarehousesService, WarehouseDTO} from "../Service/warehouses.service";

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {

  constructor(private http: HttpClient, private warehouseService: WarehousesService) {
  }

  ngOnInit(): void {
  }

  onWarehouseCreate(warehouses: { wWarehouseID: string, wStreet: string, wCountry: string, wDoorNumber: number, wLongi: number, wLat: number, wAlt: number, wDescription: string }) {

    const obj = {
      WarehouseID: warehouses.wWarehouseID, street: warehouses.wStreet, country: warehouses.wCountry
      , doorNumber: warehouses.wDoorNumber, longi: warehouses.wLongi,
      lat: warehouses.wLat, alt: warehouses.wAlt, Description: warehouses.wDescription
    } as WarehouseDTO

    this.warehouseService.createWarehouse(obj);
  }
}
