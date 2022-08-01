import { Update } from '@ngrx/entity';
import { Action, createAction, props } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';

export enum WeatherActionTypes {
  LoadWeatherMain = "[Weather] Load weather",
  LoadWeatherMainSuccess = "[Weather] Load weather Success",
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

export type WeatherActions = LoadWeatherMainSuccess | LoadWeatherMain ;



  