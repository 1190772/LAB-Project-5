import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { RoutesComponent } from './routes/routes.component';
import { TrucksComponent } from './trucks/trucks.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DeliveriesComponent,
    WarehousesComponent,
    RoutesComponent,
    TrucksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
