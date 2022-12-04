import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import axios from "axios/index";

export interface TruckDTO {
  idTruck: string,
  tTare:string,
  tMaximumLoad:string,
  tBateryCapacity:string,
  tAutonomy:string,
  tChargingTime:string
}
@Injectable({providedIn: "root"})
export class TruckService {
  constructor(private http: HttpClient) {

  }

  createRoute(routes: TruckDTO) {
    console.log(routes);
    // const headers = new HttpHeaders({'myHeader': 'procademy'});
    // this.http.post<{ name: string }>(
    //   'http://localhost:3000/api/routes',
    //   routes, {headers: headers}).subscribe((res: any) => {
    //   console.log(res);
    // });

    axios.post(`http://localhost:3000/api/routes`, routes).then().catch(err => console.error(err.body));


  }
}
