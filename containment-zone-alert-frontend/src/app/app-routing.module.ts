import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './user-components/dashboard/dashboard.component';
import { ContainmentZoneListComponent } from './user-components/containment-zone-list/containment-zone-list.component';
import { LoginDataComponent } from './admin-components/login-data/login-data.component';
import { ContainmentZoneDetailsComponent } from './admin-components/containment-zone-details/containment-zone-details.component';
import { AdminDashboardComponent } from './admin-components/admin-dashboard/admin-dashboard.component';
import { DashboardComponentsListComponent } from './user-components/dashboard-components-list/dashboard-components-list.component';
import { LoginComponent } from './login/login.component';
import { ZoneMapComponent } from './admin-components/zone-map/zone-map.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: LoginComponent },
  { path: 'dashboard-components-list', component: DashboardComponentsListComponent },
  { path: 'user-dashboard', component: DashboardComponent },
  { path: 'user-zone-list', component: ContainmentZoneListComponent },
  { path: 'login-data', component: LoginDataComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-zone-details', component: ContainmentZoneDetailsComponent },
  { path: 'zone-map', component: ZoneMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
