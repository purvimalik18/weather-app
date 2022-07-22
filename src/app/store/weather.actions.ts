import { createAction, props } from '@ngrx/store';
import { weather } from './weather.interface';


export const LOAD_WEATHER_DATA = "[weather page] load weather";
export const WEATHER_DATA_LOADED = "[weather page] weather data loaded successfully";

export const loadWeather = createAction(LOAD_WEATHER_DATA);
export const loadWeatherSuccess = createAction(WEATHER_DATA_LOADED, 
  props<{post: weather}>()
  );
