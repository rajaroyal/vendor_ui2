import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularofferComponent } from './particularoffer.component';

describe('ParticularofferComponent', () => {
  let component: ParticularofferComponent;
  let fixture: ComponentFixture<ParticularofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
