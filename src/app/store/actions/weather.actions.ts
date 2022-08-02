import { Action } from '@ngrx/store';
import { Forecast } from 'src/app/models/forecast.interface';
import { HourlyForecast } from 'src/app/models/hourlyForecast.interface';
import { Weather } from '../../models/weather.interface';

export enum WeatherActionTypes {
  LoadWeatherMain = "[Weather] Load weather",
  LoadWeatherMainSuccess = "[Weather] Load weather Success",
  LoadForecastMain = "[Weather] Load Forecast",
  LoadForecastMainSuccess= "[Weather] Load Main Success",
  LoadHourlyForecastMain = "[Weather] Load Hourly Forecast",
  LoadHourlyForecastMainSuccess = "[Weather] Load Hourly Forecast Success"
}

export class WeatherAction implements Action {
  type!: string;
  payload!: Weather;
}
export class LoadWeatherMain implements Action {
  readonly type = WeatherActionTypes.LoadWeatherMain;
  constructor(public payload: string) {
  }
}
export class LoadWeatherMainSuccess implements Action {
  readonly type = WeatherActionTypes.LoadWeatherMainSuccess;
  constructor(public payload: {weatherData: Weather}) {
  }
}

export class LoadHourlyForecastMain implements Action {
  readonly type = WeatherActionTypes.LoadHourlyForecastMain;
  constructor(public payload: {lat: number, lon: number}) {
  }
}
export class LoadHourlyForecastMainSuccess implements Action {
  readonly type = WeatherActionTypes.LoadHourlyForecastMainSuccess;
  constructor(public payload: {hourlyForecastData: HourlyForecast}) {
  }
}

export class LoadForecastMain implements Action {
  readonly type = WeatherActionTypes.LoadForecastMain;
  constructor(public payload: {lat: number, lon: number}) {
  }
}
export class LoadForecastMainSuccess implements Action {
  readonly type = WeatherActionTypes.LoadForecastMainSuccess;
  constructor(public payload: {forecastData: Forecast}) {
  }
}

export type WeatherActions = 
LoadWeatherMainSuccess 
| LoadWeatherMain 
| LoadForecastMainSuccess
|LoadForecastMain
|LoadHourlyForecastMain
|LoadHourlyForecastMainSuccess;



  