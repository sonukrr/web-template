import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeCardComponent } from './list-type-card.component';

describe('ListTypeCardComponent', () => {
  let component: ListTypeCardComponent;
  let fixture: ComponentFixture<ListTypeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
