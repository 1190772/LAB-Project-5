import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import axios, {isCancel, AxiosError} from 'axios';

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
    // const headers = new HttpHeaders({'myHeader': 'procademy'});
    // this.http.post<{ name: string }>(
    //   'http://localhost:3000/api/routes',
    //   routes, {headers: headers}).subscribe((res: any) => {
    //   console.log(res);
    // });

    axios.post(`http://localhost:3000/api/routes`, routes).then().catch(err => console.error(err.body));


  }

  fetchRoute() {

  }

  deleteRoute() {

  }

  deleteAllRoutes() {

  }

}
