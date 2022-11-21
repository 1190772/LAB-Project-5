import { Component, OnInit } from '@angular/core';
import {Delivery} from "../Delivery";

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {

  delivery: Delivery = {
    id: '1',
    weight: 35,
    warehouseId: '45',
    inTime: 4,
    outTime: 9
  };

  constructor() { }

  ngOnInit(): void {
  }

}
