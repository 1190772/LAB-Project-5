import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios, {isCancel, AxiosError} from 'axios';
import {map, Observable} from "rxjs";

export interface RouteDTO {
  idWarehouseStart: string,
  idWarehouseDestination: string,
  distance: number,
  time: number,
  energy: number
}


@Injectable({providedIn: "root"})
export class RoutesService {
  constructor(private http: HttpClient) {

  }

  createRoute(routes: RouteDTO) {
    console.log(routes);


    axios.post(`http://localhost:3000/api/routes`, routes).then().catch(err => console.error(err.body));


  }

  public extractData(res: any) {
    return res || {};
  }

  getRoutes(): Observable<any> {
    return this.http.get('http://localhost:3000/api/routes').pipe(map(this.extractData));
  }

  listRoutes(): void {
    let tbody = document.getElementById('tbody') as HTMLTableElement;
    let array = this.getRoutes();

    array.forEach(function (i) {
      for (let j = 0; j < i.length; j++) {
        let tr = tbody.insertRow();

        let td_id= tr.insertCell();
        let td_idWarehouseStart = tr.insertCell();
        let td_idWarehouseDestination = tr.insertCell();
        let td_distance = tr.insertCell();
        let td_time = tr.insertCell();
        let td_energy = tr.insertCell();

        td_id.innerText = i[j].id;
        td_idWarehouseStart.innerText = i[j].idWarehouseStart;
        td_idWarehouseDestination.innerText = i[j].idWarehouseDestination;
        td_distance.innerText = i[j].distance;
        td_time.innerText = i[j].time;
        td_energy.innerText = i[j].energy;

      }
    });
  }



}
