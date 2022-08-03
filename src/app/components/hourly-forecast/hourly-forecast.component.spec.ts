import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastComponent } from './hourly-forecast.component';

describe('WeatherMainComponent', () => {
  let component: HourlyForecastComponent;
  let fixture: ComponentFixture<HourlyForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
