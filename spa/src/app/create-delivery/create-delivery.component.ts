import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {DeliveriesService, DeliveryDTO} from "../Service/deliveries.service";

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {

  constructor(private http: HttpClient, private deliveryService: DeliveriesService) {
  }

  ngOnInit(): void {
  }

  onDeliveryCreate(deliveries: { dId: string, dDate: any, dWeight: number, dWarehouseId: string, putTime: number, takeTime: number }) {

    const obj = {
      deliveryId: deliveries.dId, deliveryDate: deliveries.dDate, weight: deliveries.dWeight
      , warehouseId: deliveries.dWarehouseId, putDeliveryTime: deliveries.putTime,
      takeDeliveryTime: deliveries.takeTime
    } as DeliveryDTO

    this.deliveryService.createDelivery(obj);
  }
}
