import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseManagerComponent} from "./warehouse-manager/warehouse-manager.component";
import {FleetManagerComponent} from "./fleet-manager/fleet-manager.component";
import {LogisticsManagerComponent} from "./logistics-manager/logistics-manager.component";
import {CreateWarehouseComponent} from "./create-warehouse/create-warehouse.component";
import {CreateDeliveryComponent} from "./create-delivery/create-delivery.component";
import {CreateRouteComponent} from "./create-route/create-route.component";
import {CreateRoutePlanningComponent} from "./create-route-planning/create-route-planning.component";
import {GetRoutePlanningComponent} from "./get-route-planning/get-route-planning.component";
import {CreateTruckComponent} from "./create-truck/create-truck.component";

const routes: Routes = [
  {path: 'warehouse-manager', component: WarehouseManagerComponent },
  {path: 'fleet-manager', component: FleetManagerComponent },
  {path: 'logistics-manager', component: LogisticsManagerComponent},
  {path: 'create-warehouse', component: CreateWarehouseComponent},
  {path: 'create-delivery', component: CreateDeliveryComponent},
  {path: 'create-route', component: CreateRouteComponent},
  {path: 'create-route-planning', component: CreateRoutePlanningComponent},
  {path: 'get-route-planning', component: GetRoutePlanningComponent},
  {path: 'create-truck', component: CreateTruckComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
