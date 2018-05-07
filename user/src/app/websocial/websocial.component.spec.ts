import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocialComponent } from './websocial.component';

describe('WebsocialComponent', () => {
  let component: WebsocialComponent;
  let fixture: ComponentFixture<WebsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
