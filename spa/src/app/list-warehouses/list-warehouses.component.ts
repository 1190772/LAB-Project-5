import { Component, OnInit } from '@angular/core';
import {DeliveriesService, DeliveryDTO} from "../Service/deliveries.service";
import {Delivery} from "../Delivery";

@Component({
  selector: 'app-list-warehouses',
  templateUrl: './list-warehouses.component.html',
  styleUrls: ['./list-warehouses.component.css']
})
export class ListWarehousesComponent implements OnInit {

  constructor(private service : DeliveriesService) { }

  ngOnInit(): void {
    this.service.listDeliveries();
  }

}
