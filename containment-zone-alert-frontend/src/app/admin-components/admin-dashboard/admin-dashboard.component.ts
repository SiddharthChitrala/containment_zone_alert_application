import { Component } from '@angular/core';
import { ContainmentZoneDetailsComponent } from '../containment-zone-details/containment-zone-details.component';
import { LoginDataComponent } from '../login-data/login-data.component';
import { AdminDashboardDetailsComponent } from '../admin-dashboard-details/admin-dashboard-details.component';
import { ZoneMapComponent } from '../zone-map/zone-map.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  activeIndex: number = -1;
  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  activeComponent: any = null;

  setActiveComponent(section: string) {
    switch (section) {
      case 'Dashboard':
        this.activeComponent = AdminDashboardDetailsComponent;
        break;
      case 'ZoneDetails':
        this.activeComponent = ContainmentZoneDetailsComponent;
        break;
      case 'LoginData':
        this.activeComponent = LoginDataComponent;
        break;
      case 'Map':
        this.activeComponent = ZoneMapComponent;
        break;
      default:
        break;
    }
  }
  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}
