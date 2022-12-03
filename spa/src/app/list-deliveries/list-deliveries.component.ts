import { Component, OnInit } from '@angular/core';
import {DeliveriesService, DeliveryDTO} from "../Service/deliveries.service";
import {Delivery} from "../Delivery";

@Component({
  selector: 'app-list-deliveries',
  templateUrl: './list-deliveries.component.html',
  styleUrls: ['./list-deliveries.component.css']
})
export class ListDeliveriesComponent implements OnInit {

  constructor(private service : DeliveriesService) { }

  ngOnInit(): void {
    this.service.listDeliveries();
  }

}
