import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdititemsnewComponent } from './edititemsnew.component';

describe('EdititemsnewComponent', () => {
  let component: EdititemsnewComponent;
  let fixture: ComponentFixture<EdititemsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdititemsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdititemsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
