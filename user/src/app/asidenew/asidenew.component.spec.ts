import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidenewComponent } from './asidenew.component';

describe('AsidenewComponent', () => {
  let component: AsidenewComponent;
  let fixture: ComponentFixture<AsidenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
