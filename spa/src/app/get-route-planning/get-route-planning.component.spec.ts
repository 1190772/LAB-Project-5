import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRoutePlanningComponent } from './get-route-planning.component';

describe('GetRoutePlanningComponent', () => {
  let component: GetRoutePlanningComponent;
  let fixture: ComponentFixture<GetRoutePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRoutePlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRoutePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
