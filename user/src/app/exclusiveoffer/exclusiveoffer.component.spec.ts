import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveofferComponent } from './exclusiveoffer.component';

describe('ExclusiveofferComponent', () => {
  let component: ExclusiveofferComponent;
  let fixture: ComponentFixture<ExclusiveofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
