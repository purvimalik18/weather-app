import { Action, createAction, props } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';

export enum WeatherActionTypes {
  LOAD_WEATHER = "[Weather] Load Weather",
  LOAD_WEATHER_SUCCESS = "[Locations] Load Keys Success",
  LOAD_WEATHER_FAIL = "[Locations] Load Keys Fail",
}

export class LoadWeather implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER;
  constructor(public payload: Weather) {}
}
export class LoadWeatherSuccess implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_SUCCESS;
  constructor(public payload: Weather) {}
}

export class LoadWeatherFail implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_FAIL;
  constructor(public payload: string) {}
}

export type WeatherActions =
  | LoadWeather
  | LoadWeatherSuccess
  | LoadWeatherFail