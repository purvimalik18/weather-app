import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromWeather from "./weather.reducers";


export interface WeatherDataState {
  weather:fromWeather.WeatherState
}

export const weathersReducers: ActionReducerMap<WeatherDataState, any> = {
  weather: fromWeather.weatherReducer
};

export const getWeatherState = createFeatureSelector<WeatherDataState>("weather");
