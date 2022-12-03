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

    const DATE_REGEX = new RegExp(/^(20[0-9]{2})[/]([1-9]|1[0-2])[/]([1-9]|[12][0-9]|3[01])$/);

    if(!DATE_REGEX.test(deliveries.dDate.toString())){
      alert("Invalid Date!");
    }
    else if(deliveries.dWeight < 0 || deliveries.dWeight == null){
      alert("Invalid Weight!");
    }
    else if(deliveries.putTime < 0 || deliveries.putTime == null){
      alert("Invalid Put Time!")
    }
    else if(deliveries.takeTime < 0 || deliveries.takeTime == null){
      alert("Invalid Take Time!")
    }
    else alert("Delivery created with success!")

    const obj = {
      deliveryId: deliveries.dId, deliveryDate: deliveries.dDate, weight: deliveries.dWeight
      , warehouseId: deliveries.dWarehouseId, putDeliveryTime: deliveries.putTime,
      takeDeliveryTime: deliveries.takeTime
    } as DeliveryDTO

    this.deliveryService.createDelivery(obj);
  }
}
