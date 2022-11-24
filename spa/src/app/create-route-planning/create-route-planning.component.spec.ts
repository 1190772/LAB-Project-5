import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutePlanningComponent } from './create-route-planning.component';

describe('CreateRoutePlanningComponent', () => {
  let component: CreateRoutePlanningComponent;
  let fixture: ComponentFixture<CreateRoutePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRoutePlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoutePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
