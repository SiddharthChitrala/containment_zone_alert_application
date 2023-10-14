import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainmentZoneListComponent } from './containment-zone-list.component';

describe('ContainmentZoneListComponent', () => {
  let component: ContainmentZoneListComponent;
  let fixture: ComponentFixture<ContainmentZoneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainmentZoneListComponent]
    });
    fixture = TestBed.createComponent(ContainmentZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
