import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { WeatherDataService } from "../../services/weather-data.service";
import * as fromActions from "../actions/weather.actions";

@Injectable()
export class WeatherEffects{

    constructor(private actions$: Actions, 
      private api: WeatherDataService){
    }
    

    getWeatherForCity$ = createEffect(() => {
      
      return this.actions$.pipe(
        ofType<fromActions.LoadWeatherMain>(fromActions.WeatherActionTypes.LoadWeatherMain),
          mergeMap((action) => {
          return this.api.getWeatherForCity(action.payload.toString()).pipe(
            map(weather => {
              return (new fromActions.LoadWeatherMainSuccess({weatherData: weather}))
            })
          )}
        )
      )
      }
    )

    getForecast$ = createEffect(() => {
      
      return this.actions$.pipe(
        ofType<fromActions.LoadForecastMain>(fromActions.WeatherActionTypes.LoadForecastMain),
          mergeMap((action) => {
          return this.api.getForecast(action.payload.lat, action.payload.lon).pipe(
            map(forecast => {
              return (new fromActions.LoadForecastMainSuccess({forecastData: forecast}))
            })
          )}
        )
      )
      }
    )

    getHourlyForecast$ = createEffect(() => {
      
      return this.actions$.pipe(
        ofType<fromActions.LoadHourlyForecastMain>(fromActions.WeatherActionTypes.LoadHourlyForecastMain),
          mergeMap((action) => {
          return this.api.getHourlyForecast(action.payload.lat, action.payload.lon).pipe(
            map(forecast => {
              return (new fromActions.LoadHourlyForecastMainSuccess({hourlyForecastData: forecast}))
            })
          )}
        )
      )
      }
    )
}