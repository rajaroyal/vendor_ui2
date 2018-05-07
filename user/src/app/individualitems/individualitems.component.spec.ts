import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualitemsComponent } from './individualitems.component';

describe('IndividualitemsComponent', () => {
  let component: IndividualitemsComponent;
  let fixture: ComponentFixture<IndividualitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
