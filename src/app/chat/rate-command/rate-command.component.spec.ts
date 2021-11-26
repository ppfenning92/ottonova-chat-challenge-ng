import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCommandComponent } from './rate-command.component';

describe('RateCommandComponent', () => {
  let component: RateCommandComponent;
  let fixture: ComponentFixture<RateCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
