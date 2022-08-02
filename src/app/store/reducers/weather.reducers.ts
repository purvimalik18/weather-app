import { createReducer, on, INITIAL_STATE, ActionReducerMap } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';
import * as fromActions from '../actions/weather.actions';

export interface WeatherDataState {
  weatherData: Weather
}

const initialWeatherState: WeatherDataState = {
  weatherData: {coord: { lon: 80.9167, lat: 26.85 },
  weather: [{
    id: 721,
    main: "Haze",
    description: "haze",
    icon: "50d"
  }],
  base: "stations",
  main: {
    temp: 33.99,
    feels_like: 40.99,
    temp_min: 33.99,
    temp_max: 33.99,
    pressure: 999,
    humidity: 79
  },
  visibility: 5000,
  wind: {
    speed: 5.14,
    deg: 110,
    gust:5.14
  },
  clouds: {
    all: 75
  },
  dt: 1658572270,
  sys: {
    type: 1,
    id: 9176,
    country: "IN",
    sunrise: 1658534149,
    sunset: 1658582967
  },
  timezone: 19800,
  id: 1264733,
  name: "Lucknow",
  cod: 200,
}};

export interface AppState {
  weather: WeatherDataState;
}

export function weatherReducer(state: WeatherDataState = initialWeatherState, action: fromActions.WeatherActions): WeatherDataState {
  switch (action.type) {
    case fromActions.WeatherActionTypes.LoadWeatherMainSuccess:
      return {
        ...state,
        weatherData: action.payload.weatherData
      };

    default:
      return state;
  }
}

export const weathersReducers: ActionReducerMap<AppState> = {
  weather: weatherReducer
};

export const selectWeather = (state: AppState) => {
  return state.weather.weatherData

}




