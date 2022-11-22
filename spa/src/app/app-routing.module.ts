import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from "./container/container.component";
import {WarehouseManagerComponent} from "./warehouse-manager/warehouse-manager.component";
import {FleetManagerComponent} from "./fleet-manager/fleet-manager.component";

const routes: Routes = [
  {path: 'warehouse-manager', component: WarehouseManagerComponent },
  {path: 'fleet-manager', component: FleetManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
