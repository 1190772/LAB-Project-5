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
import {RouterModule, Routes} from "@angular/router";

const appRoute: Routes = [
  {path: 'Admin', component: AdminComponent},
  {path: 'Warehouse Manager', component: WarehouseManagerComponent},
  {path: 'Logistics Manager', component: LogisticsManagerComponent},
  {path: 'Fleet Manager', component: FleetManagerComponent}

]



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
    FleetManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
