import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromWeather from "./weather.reducers";

export interface WeatherDataState {
  position:fromWeather.WeatherState
}

export const weathersReducers: ActionReducerMap<WeatherDataState> = {
  position: fromWeather.weatherReducer
};

export const getWeatherState = createFeatureSelector<WeatherDataState>("weather");
