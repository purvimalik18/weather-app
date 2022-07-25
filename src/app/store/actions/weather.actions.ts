import { Action, createAction, props } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';

export enum WeatherActionTypes {
  LOAD_WEATHER_MAIN = "[Weather] Load Weather",
  LOAD_WEATHER_MAIN_SUCCESS = "[Locations] Load Keys Success",
  LOAD_WEATHER_MAIN_FAIL = "[Locations] Load Keys Fail",
}

export class LoadWeatherMain implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_MAIN;
  constructor(public payload: string) {}
}
export class LoadWeatherMainSuccess implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_MAIN_SUCCESS;
  constructor(public payload: Weather) {}
}

export class LoadWeatherMainFail implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_MAIN_FAIL;
  constructor(public payload: string) {}
}

export type WeatherActions =
  | LoadWeatherMain
  | LoadWeatherMainSuccess
  | LoadWeatherMainFail