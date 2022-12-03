import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios, {isCancel, AxiosError} from 'axios';

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
    // const headers = new HttpHeaders({'myHeader': 'procademy'});
    // this.http.post<{ name: string }>(
    //   'http://localhost:5000/api/delivery',
    //   deliveries, {headers: headers}).subscribe((res: any) => {
    //   console.log(res);
    // });

    axios.post(`http://localhost:5000/api/delivery`, deliveries).then().catch(err => console.error(err.body));


  }

  fetchDelivery() {

  }

  deleteDelivery() {

  }

  deleteAllDeliveries() {

  }

}
