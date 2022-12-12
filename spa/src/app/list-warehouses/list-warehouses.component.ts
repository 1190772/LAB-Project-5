import { Component, OnInit } from '@angular/core';
import {WarehousesService, WarehouseDTO} from "../Service/warehouses.service";


@Component({
  selector: 'app-list-warehouses',
  templateUrl: './list-warehouses.component.html',
  styleUrls: ['./list-warehouses.component.css']
})
export class ListWarehousesComponent implements OnInit {

  constructor(private service : WarehousesService) { }

  ngOnInit(): void {
    this.service.listWarehouses();
  }

}
