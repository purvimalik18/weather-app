import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { Weather } from "src/app/models/weather.interface";

import * as fromWeather from "./weather.reducers";





export const getWeatherState = createFeatureSelector<fromWeather.WeatherDataState>("weather");
