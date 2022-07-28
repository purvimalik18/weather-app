import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Weather } from "src/app/models/weather.interface";
import { WeatherDataService } from "../../services/weather-data.service";
import * as fromActions from "../actions/weather.actions";
import { AppState } from "../reducers/weather.reducers";

@Injectable()
export class WeatherEffects{

    constructor(private actions$: Actions, 
      private api: WeatherDataService,
      private store: Store<AppState>){
    }
    

    getWeatherForCity$ = createEffect(() => {
      
      return this.actions$.pipe(
        ofType<fromActions.LoadWeatherMain>(fromActions.WeatherActionTypes.LoadWeatherMain),
          mergeMap((action) => {
            console.log(action)
          return this.api.getWeatherForCity(action.payload.toString()).pipe(
            map(weather => {
              console.log(weather)
              return (new fromActions.LoadWeatherMainSuccess({weatherData: weather}))
            })
          )}
        )
      )
      }, { dispatch: false }    
    )

   
}