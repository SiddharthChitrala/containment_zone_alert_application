import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardDetailsComponent } from './admin-dashboard-details.component';

describe('AdminDashboardDetailsComponent', () => {
  let component: AdminDashboardDetailsComponent;
  let fixture: ComponentFixture<AdminDashboardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardDetailsComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
