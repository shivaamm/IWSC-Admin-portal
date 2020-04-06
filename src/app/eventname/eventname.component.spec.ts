import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventnameComponent } from './eventname.component';

describe('EventnameComponent', () => {
  let component: EventnameComponent;
  let fixture: ComponentFixture<EventnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
