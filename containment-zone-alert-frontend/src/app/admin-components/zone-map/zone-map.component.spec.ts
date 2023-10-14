import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneMapComponent } from './zone-map.component';

describe('ZoneMapComponent', () => {
  let component: ZoneMapComponent;
  let fixture: ComponentFixture<ZoneMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneMapComponent]
    });
    fixture = TestBed.createComponent(ZoneMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
