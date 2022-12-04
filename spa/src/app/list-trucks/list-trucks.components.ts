import { Component, OnInit } from '@angular/core';
import {TruckService} from "../Service/truck.services";

@Component({
  selector: 'app-list-trucks',
  templateUrl: './list-trucks.component.html',
  styleUrls: ['./list-trucks.component.html.component.css']
})
export class ListTrucksComponents implements OnInit {

  constructor(private service : TruckService) { }

  ngOnInit(): void {
    this.service.listTrucks();
  }

}
