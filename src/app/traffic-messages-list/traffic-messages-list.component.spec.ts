import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficMessagesListComponent } from './traffic-messages-list.component';

describe('TrafficMessagesListComponent', () => {
  let component: TrafficMessagesListComponent;
  let fixture: ComponentFixture<TrafficMessagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficMessagesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
