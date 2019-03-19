import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHelloComponent } from './list-hello.component';

describe('ListHelloComponent', () => {
  let component: ListHelloComponent;
  let fixture: ComponentFixture<ListHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
