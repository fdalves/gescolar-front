import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioGeralComponent } from './calendario-geral.component';

describe('CalendarioGeralComponent', () => {
  let component: CalendarioGeralComponent;
  let fixture: ComponentFixture<CalendarioGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
