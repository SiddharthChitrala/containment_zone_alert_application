import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponentsListComponent } from './dashboard-components-list.component';

describe('DashboardComponentsListComponent', () => {
  let component: DashboardComponentsListComponent;
  let fixture: ComponentFixture<DashboardComponentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponentsListComponent]
    });
    fixture = TestBed.createComponent(DashboardComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
