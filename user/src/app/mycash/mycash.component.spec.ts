import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycashComponent } from './mycash.component';

describe('MycashComponent', () => {
  let component: MycashComponent;
  let fixture: ComponentFixture<MycashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
