import { Update } from '@ngrx/entity';
import { Action, createAction, props } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';

export enum WeatherActionTypes {
  LOAD_WEATHER_MAIN_SUCCESS = "[Weather] Load weather Success",
}

// export class WeatherAction implements Action {
//   type!: string;
//   payload!: {
//     weatherData: Weather
//   };
// }

export class LoadWeatherMainSuccess implements Action {
  readonly type = WeatherActionTypes.LOAD_WEATHER_MAIN_SUCCESS;
  constructor(public payload: Weather) {
    console.log(payload);
  }
}

export type WeatherActions = LoadWeatherMainSuccess;



  