import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';
import { ContainmentZoneListComponent } from './user-components/containment-zone-list/containment-zone-list.component';
import { LoginDataComponent } from './admin-components/login-data/login-data.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContainmentZoneDetailsComponent } from './admin-components/containment-zone-details/containment-zone-details.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { DashboardComponentsListComponent } from './user-components/dashboard-components-list/dashboard-components-list.component';
import { AdminDashboardDetailsComponent } from './admin-components/admin-dashboard-details/admin-dashboard-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZoneMapComponent } from './admin-components/zone-map/zone-map.component'; // Import HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContainmentZoneListComponent,
    LoginDataComponent,
    LoginComponent,
    HomeComponent,
    ContainmentZoneDetailsComponent,
    AdminDashboardComponent,
    DashboardComponentsListComponent,
    AdminDashboardDetailsComponent,
    ZoneMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}