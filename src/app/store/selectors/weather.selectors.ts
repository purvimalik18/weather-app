import { createSelector } from "@ngrx/store";
import * as fromFeature from "../reducers/index";
import { WeatherState } from "../reducers/weather.reducers";

export const getWeatherDataState = createSelector(
    fromFeature.getWeatherState,
    (state: WeatherState) => state
);

