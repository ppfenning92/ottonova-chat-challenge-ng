import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCommandComponent } from './complete-command.component';

describe('CompleteCommandComponent', () => {
  let component: CompleteCommandComponent;
  let fixture: ComponentFixture<CompleteCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
