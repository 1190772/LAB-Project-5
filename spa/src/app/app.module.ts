import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { RoutesComponent } from './routes/routes.component';
import { TrucksComponent } from './trucks/trucks.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { NotificationComponent } from './notification/notification.component';
import { WarehouseManagerComponent } from './warehouse-manager/warehouse-manager.component';
import { LogisticsManagerComponent } from './logistics-manager/logistics-manager.component';
import { FleetManagerComponent } from './fleet-manager/fleet-manager.component';
import {MatButtonModule} from "@angular/material/button";
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { CreateRoutePlanningComponent } from './create-route-planning/create-route-planning.component';
import { GetRoutePlanningComponent } from './get-route-planning/get-route-planning.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { ListWarehousesComponent } from './list-warehouses/list-warehouses.component';
import {listWarehouseService} from "./list-warehouses/list-warehouse.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DeliveriesComponent,
    WarehousesComponent,
    RoutesComponent,
    TrucksComponent,
    NavComponent,
    HeaderComponent,
    ContainerComponent,
    NotificationComponent,
    WarehouseManagerComponent,
    LogisticsManagerComponent,
    FleetManagerComponent,
    CreateWarehouseComponent,
    CreateDeliveryComponent,
    CreateRouteComponent,
    CreateRoutePlanningComponent,
    GetRoutePlanningComponent,
    CreateTruckComponent,
    ListWarehousesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
