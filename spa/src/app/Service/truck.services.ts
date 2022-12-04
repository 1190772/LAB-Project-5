import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import axios from "axios";
import {map, Observable} from "rxjs";

export interface TruckDTO {
  licensePlate:string,
  tare:number,
  maximumLoad:number,
  batteryCapacity:number,
  autonomy:number,
  chargingTime:number
}
@Injectable({providedIn: "root"})
export class TruckService {
  constructor(private http: HttpClient) {

  }

  createTruck(trucks: TruckDTO) {
    console.log(trucks);
    // const headers = new HttpHeaders({'myHeader': 'procademy'});
    // this.http.post<{ name: string }>(
    //   'http://localhost:3000/api/trucks',
    //   routes, {headers: headers}).subscribe((res: any) => {
    //   console.log(res);
    // });

    axios.post(`http://localhost:3000/api/trucks`, trucks).then().catch(err => console.error(err.body));


  }

  public extractData(res: any) {
    return res || {};
  }

  getTrucks(): Observable<any> {
    return this.http.get('http://localhost:3000/api/trucks').pipe(map(this.extractData));
  }

  listTrucks(): void {
    let tbody = document.getElementById('tbody') as HTMLTableElement;
    let array = this.getTrucks();

    array.forEach(function (i) {
      for (let j = 0; j < i.length; j++) {
        let tr = tbody.insertRow();

        let td_licensePlate = tr.insertCell();
        let td_tare = tr.insertCell();
        let td_maximum_load = tr.insertCell();
        let td_battery_capacity = tr.insertCell();
        let td_autonomy = tr.insertCell();
        let td_charging_time = tr.insertCell();

        td_licensePlate.innerText = i[j].licensePlate;
        td_tare.innerText = i[j].tare;
        td_maximum_load.innerText = i[j].maximumLoad;
        td_battery_capacity.innerText = i[j].batteryCapacity;
        td_autonomy.innerText = i[j].autonomy;
        td_charging_time.innerText = i[j].chargingTime;

      }
    });
  }

}
