import { createReducer, on, INITIAL_STATE, ActionReducerMap } from '@ngrx/store';
import { Weather } from '../../models/weather.interface';
import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import * as fromActions from '../actions/weather.actions';
import * as fromReducer from "./index"

// export interface WeatherState {
//   coord:{
//     lon: number;
//     lat:number;
//   },
//   weather:[
//     {
//       id:number;
//       main:string;
//       description:string;
//       icon:string;
//     }],
//     base:string;
//     main:{
//       temp:number;
//       feels_like:number;
//       temp_min:number;
//       temp_max:number;
//       pressure:number;
//       humidity:number
//     },
//     visibility:number;
//     wind:{
//       speed:number;
//       deg:number
//     },
//     clouds:{
//       all:number
//     },
//     dt:number;
//     sys:{
//       type:number,
//       id:number;
//       country:string;
//       sunrise:number,
//       sunset:number
//     },
//     timezone:number,
//     id:number,
//     name:string;
//     cod:number
// };

// export const defaultCondition: WeatherState =  {
//   coord: { lon: 80.9167, lat: 26.85 },
//   weather: [{
//     id: 721,
//     main: "Haze",
//     description: "haze",
//     icon: "50d"
//   }],
//   base: "stations",
//   main: {
//     temp: 33.99,
//     feels_like: 40.99,
//     temp_min: 33.99,
//     temp_max: 33.99,
//     pressure: 999,
//     humidity: 79
//   },
//   visibility: 5000,
//   wind: {
//     speed: 5.14,
//     deg: 110
//   },
//   clouds: {
//     all: 75
//   },
//   dt: 1658572270,
//   sys: {
//     type: 1,
//     id: 9176,
//     country: "IN",
//     sunrise: 1658534149,
//     sunset: 1658582967
//   },
//   timezone: 19800,
//   id: 1264733,
//   name: "Lucknow",
//   cod: 200,
// }

// export const weatherAdapter:  EntityAdapter<Weather> = createEntityAdapter<Weather>();
// export const initialState = weatherAdapter.getInitialState(defaultCondition);

// export function weatherReducer(state = initialState, action: fromActions.WeatherActions): WeatherState {
//   switch (action.type) {

//     case fromActions.WeatherActionTypes.LOAD_WEATHER_MAIN_SUCCESS:
//       console.log(action);
//       return weatherAdapter.addOne(action.payload, { ...state, loading: false, loaded: true });
    
//     case fromActions.WeatherActionTypes.LOAD_WEATHER_MAIN_FAIL:
//       return { ...state, entities: {},error: action.payload };


//     default:
//       return state;
//   }
// }

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
    deg: 110
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
  console.log(action);
  switch (action.type) {
    case fromActions.WeatherActionTypes.LOAD_WEATHER_MAIN_SUCCESS:
      console.log(state)
      return {
        ...state,
        weatherData: action.payload
      };

    default:
      return state;
  }
}

export const weathersReducers: ActionReducerMap<AppState> = {
  weather: weatherReducer
};

export const selectWeather = (state: AppState) => state.weather;





