import { createSelector, MemoizedSelector } from "@ngrx/store";
import * as fromFeature from "../reducers/index";
import { WeatherDataState } from "../reducers/weather.reducers";

export const getWeatherDataState= createSelector(
   
    fromFeature.getWeatherState,
    (state: any) => console.log(state)
);

