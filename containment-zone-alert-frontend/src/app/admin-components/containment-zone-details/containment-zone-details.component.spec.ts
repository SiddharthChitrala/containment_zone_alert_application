import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainmentZoneDetailsComponent } from './containment-zone-details.component';

describe('ContainmentZoneDetailsComponent', () => {
  let component: ContainmentZoneDetailsComponent;
  let fixture: ComponentFixture<ContainmentZoneDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainmentZoneDetailsComponent]
    });
    fixture = TestBed.createComponent(ContainmentZoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
