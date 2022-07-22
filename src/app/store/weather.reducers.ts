import { state } from '@angular/animations';
import { createReducer, on, Action, INITIAL_STATE } from '@ngrx/store';
import { loadWeatherSuccess } from './weather.actions';

export const userFeatureKey = 'WeatherState';

export const reducer = createReducer(
  INITIAL_STATE,
  on(loadWeatherSuccess, (state: any,action) => {
    let post ={ ...action.post};
    return{
      ...state,
      posts: [...state.toString(), post]
    };
  })


);

