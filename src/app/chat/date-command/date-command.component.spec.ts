import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCommandComponent } from './date-command.component';

describe('DateCommandComponent', () => {
  let component: DateCommandComponent;
  let fixture: ComponentFixture<DateCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
