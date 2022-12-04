import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRouteComponent } from './create-route.component';
import {RoutesService} from "../Service/routes.service";

describe('CreateRouteComponent', () => {
  let component: CreateRouteComponent;
  let fixture: ComponentFixture<CreateRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRouteComponent ],
      providers: [
        {provide: RoutesService, useClass: RoutesService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
