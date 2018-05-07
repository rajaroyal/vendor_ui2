import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderanalasysComponent } from './orderanalasys.component';

describe('OrderanalasysComponent', () => {
  let component: OrderanalasysComponent;
  let fixture: ComponentFixture<OrderanalasysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderanalasysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderanalasysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
