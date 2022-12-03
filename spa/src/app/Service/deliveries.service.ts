import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import axios, {} from 'axios';
import {map, Observable} from "rxjs";

export interface DeliveryDTO {
  deliveryId: string,
  deliveryDate: Date | any,
  weight: number,
  warehouseId: string,
  putDeliveryTime: number,
  takeDeliveryTime: number
}


@Injectable({providedIn: "root"})
export class DeliveriesService {


  constructor(private http: HttpClient) {

  }

  createDelivery(deliveries: DeliveryDTO) {
    console.log(deliveries);
    axios.post(`http://localhost:5000/api/delivery`, deliveries).then().catch(err => console.error(err.body));
  }

  public extractData(res: any) {
    return res || {};
  }

  getDeliveries(): Observable<any> {
    return this.http.get('http://localhost:5000/api/delivery').pipe(map(this.extractData));
  }

  listDeliveries(): void {
    let tbody = document.getElementById('tbody') as HTMLTableElement;
    let array = this.getDeliveries();

    array.forEach(function (i) {
      for (let j = 0; j < i.length; j++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_date = tr.insertCell();
        let td_weight = tr.insertCell();
        let td_warehouseId = tr.insertCell();
        let td_putTime = tr.insertCell();
        let td_takeTime = tr.insertCell();

        td_id.innerText = i[j].deliveryId;
        td_date.innerText = i[j].deliveryDate;
        td_weight.innerText = i[j].weight;
        td_warehouseId.innerText = i[j].warehouseId;
        td_putTime.innerText = i[j].putDeliveryTime;
        td_takeTime.innerText = i[j].takeDeliveryTime;

      }
    });

  }


}
