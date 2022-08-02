import { createReducer, on, INITIAL_STATE, ActionReducerMap } from '@ngrx/store';
import { Forecast } from 'src/app/models/forecast.interface';
import { HourlyForecast } from 'src/app/models/hourlyForecast.interface';
import { Weather } from '../../models/weather.interface';
import * as fromActions from '../actions/weather.actions';

export interface WeatherDataState {
  weatherData: Weather
}
export interface ForecastDataState{
  forecastData: Forecast
}
export interface HourlyForecastDataState{
  hourlyForecastData: HourlyForecast
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
const initialForecastState: ForecastDataState = {
  forecastData: {
    cod: "",
    message:0,
    cnt:0,
    list:[
        {
            dt:0,
            sunrise:0,
            sunset:0,
            temp:{
                day:0,
                min:0,
                max:0,
                night:0,
                eve:0,
                morn:0
            },
            feels_like:{
                day:0,
                night:0,
                eve:0,
                morn:0
            },
            pressure:0,
            humidity:0,
            weather:[
                {
                    id:0,
                    main:"",
                    description:"",
                    icon:""
                }
            ],
            speed:0,
            deg:0,
            gust:0,
            clouds:0,
            pop:0,
            rain:0
        }
      ],
      city:{
        id:1273294,
        name:"Delhi",
        coord:{
            lat:28.6667,
            lon:77.2167
        },
        country:"IN",
        population:10927986,
        timezone:19800,
        sunrise:1659226299,
        sunset:1659274995
  }
}}
const initialHourlyForecastState: HourlyForecastDataState = {
  hourlyForecastData: {
    cod: "",
    message:0,
    cnt:0,
    list:[
        {
          dt:0,
          main:{
              temp:25.23,
              feels_like:26.26,
              temp_min:25.23,
              temp_max:25.34,
              pressure:1009,
              sea_level:1009,
              grnd_level:984,
              humidity:94,
              temp_kf:-0.11
          },
          weather:[
              {
                  id:804,
                  main:"Clouds",
                  description:"overcast clouds",
                  icon:"04d"
              }
          ],
          clouds:{
              all:98
          },
          wind:{
              speed:2.15,
              deg:276,
              gust:2.81
          },
          visibility:10000,
          pop:0,
          sys:{
              pod:"d"
          },
          dt_txt:"2022-08-02 21:00:00"
      },
  ],
  city:{
      id:1851632,
      name:"Shuzenji",
      coord:{
          lat:35,
          lon:139
      },
      country:"JP",
      population:0,
      timezone:32400,
      sunrise:1659470065,
      sunset:1659519956
  }
}
}

export interface AppState {
  weather: WeatherDataState;
  forecast: ForecastDataState;
  hourlyForecast: HourlyForecastDataState;
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
export function forecastReducer(state: ForecastDataState = initialForecastState, action: fromActions.WeatherActions): ForecastDataState {
  switch (action.type) {
    case fromActions.WeatherActionTypes.LoadForecastMainSuccess:
      return {
        ...state,
        forecastData: action.payload.forecastData
      };

    default:
      return state;
  }
}

export function hourlyForecastReducer(state: HourlyForecastDataState = initialHourlyForecastState, action: fromActions.WeatherActions): HourlyForecastDataState {
  switch (action.type) {
    case fromActions.WeatherActionTypes.LoadHourlyForecastMainSuccess:
      return {
        ...state,
        hourlyForecastData: action.payload.hourlyForecastData
      }

    default:
      return state;
  }
}

export const weathersReducers: ActionReducerMap<AppState> = {
  weather: weatherReducer,
  forecast: forecastReducer,
  hourlyForecast: hourlyForecastReducer
};

export const selectWeather = (state: AppState) => {
  return state.weather.weatherData

}

export const selectForecast = (state: AppState) => {
  return state.forecast.forecastData

}

export const selectHourlyForecast = (state: AppState) => {
  return state.hourlyForecast.hourlyForecastData
}







