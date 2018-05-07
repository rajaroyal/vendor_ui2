import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsnewComponent } from './itemsnew.component';

describe('ItemsnewComponent', () => {
  let component: ItemsnewComponent;
  let fixture: ComponentFixture<ItemsnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
