import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios, {isCancel, AxiosError} from 'axios';

export interface WarehouseDTO {
  WarehouseID: string,
  street: string,
  country: string,
  doorNumber: number,
  longi: number,
  lat: number,
  alt: number,
  Description: string
}


@Injectable({providedIn: "root"})
export class WarehousesService {
  constructor(private http: HttpClient) {

  }

  createWarehouse(warehouses: WarehouseDTO) {
    console.log(warehouses);

    axios.post(`http://localhost:5000/api/warehouse`, warehouses).then().catch(err => console.error(err.body));


  }

}
