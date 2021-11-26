import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCommandComponent } from './map-command.component';

describe('MapCommandComponent', () => {
  let component: MapCommandComponent;
  let fixture: ComponentFixture<MapCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
