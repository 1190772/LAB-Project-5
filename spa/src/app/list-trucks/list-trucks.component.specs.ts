import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ListTrucksComponent} from "./list-trucks.component";

describe('ListTrucksComponent', () => {
  let component: ListTrucksComponent;
  let fixture: ComponentFixture<ListTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrucksComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
