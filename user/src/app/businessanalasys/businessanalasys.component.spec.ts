import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessanalasysComponent } from './businessanalasys.component';

describe('BusinessanalasysComponent', () => {
  let component: BusinessanalasysComponent;
  let fixture: ComponentFixture<BusinessanalasysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessanalasysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessanalasysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
