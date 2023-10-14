import { Component } from '@angular/core';
import { ContainmentZoneListComponent } from '../containment-zone-list/containment-zone-list.component';
import { DashboardComponentsListComponent } from '../dashboard-components-list/dashboard-components-list.component';
import { ZoneMapComponent } from 'src/app/admin-components/zone-map/zone-map.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  activeIndex: number = -1;
  setActiveIndex(index: number) {
    this.activeIndex = this.activeIndex === index ? -1 : index;
  }

  activeComponent: any = null;

  setActiveComponent(section: string) {
    switch (section) {
      case 'Dashboard':
        this.activeComponent = DashboardComponentsListComponent;
        break;
      case 'Recruitment':
        this.activeComponent = ContainmentZoneListComponent;
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
