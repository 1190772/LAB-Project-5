import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ListTrucksComponents} from "./list-trucks.components";

describe('ListTrucksComponent', () => {
  let component: ListTrucksComponents;
  let fixture: ComponentFixture<ListTrucksComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrucksComponents ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTrucksComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
