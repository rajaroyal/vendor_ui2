import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsideComponent } from './rowside.component';

describe('RowsideComponent', () => {
  let component: RowsideComponent;
  let fixture: ComponentFixture<RowsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
