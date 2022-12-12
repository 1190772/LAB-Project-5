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

import {RoadNetworkComponent} from "./road-network/road-network.component";
import {ListDeliveriesComponent} from "./list-deliveries/list-deliveries.component";
import {ListTrucksComponent} from "./list-trucks/list-trucks.component";
import {ListRoutesComponent} from "./list-routes/list-routes.component";
import {ListWarehousesComponent} from "./list-warehouses/list-warehouses.component";

const routes: Routes = [
  {path: 'warehouse-manager', component: WarehouseManagerComponent },
  {path: 'fleet-manager', component: FleetManagerComponent },
  {path: 'logistics-manager', component: LogisticsManagerComponent},
  {path: 'create-warehouse', component: CreateWarehouseComponent},
  {path: 'create-delivery', component: CreateDeliveryComponent},
  {path: 'create-route', component: CreateRouteComponent},
  {path: 'create-route-planning', component: CreateRoutePlanningComponent},
  {path: 'get-route-planning', component: GetRoutePlanningComponent},
  {path: 'create-truck', component: CreateTruckComponent},
  {path: 'road-network',component:RoadNetworkComponent},
  {path: 'list-deliveries',component:ListDeliveriesComponent},
  {path: 'list-trucks',component:ListTrucksComponent},
  {path: 'list-routes',component:ListRoutesComponent},
  {path: 'list-warehouses',component:ListWarehousesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
