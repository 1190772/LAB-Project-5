import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios, {isCancel, AxiosError} from 'axios';
import {map, Observable} from "rxjs";

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

  public extractData(res: any) {
    return res || {};
  }

  getWarehouses(): Observable<any> {
    return this.http.get('http://localhost:5000/api/warehouse').pipe(map(this.extractData));
  }

  listWarehouses(): void {
    let tbody = document.getElementById('tbody') as HTMLTableElement;
    let array = this.getWarehouses();

    array.forEach(function (i) {
      for (let j = 0; j < i.length; j++) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_street = tr.insertCell();
        let td_country = tr.insertCell();
        let td_doorNumber = tr.insertCell();
        let td_longitude = tr.insertCell();
        let td_latitude = tr.insertCell();
        let td_altitude = tr.insertCell();
        let td_description = tr.insertCell();

        td_id.innerText = i[j].WarehouseID;
        td_street.innerText = i[j].street;
        td_country.innerText = i[j].country;
        td_doorNumber.innerText = i[j].doorNumber;
        td_longitude.innerText = i[j].longi;
        td_latitude.innerText = i[j].lat;
        td_altitude.innerText = i[j].alt;
        td_description.innerText = i[j].Description;

      }
    });
  }
}
