import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { Weather } from "src/app/models/weather.interface";
import { WeatherDataService } from "../../services/weather-data.service";
import * as fromActions from "../actions/weather.actions";

@Injectable()
export class WeatherEffects{

    constructor(private actions$: Actions, private api: WeatherDataService){}

    loadWeather$ = createEffect(() => {
      return this.actions$.pipe(
        ofType<fromActions.LoadWeatherMain>(fromActions.WeatherActionTypes.LOAD_WEATHER_MAIN),
        map((action: fromActions.LoadWeatherMain) =>
          this.api.getWeatherForCity(action.payload).pipe(
            map((weather: Weather) => new fromActions.LoadWeatherMainSuccess(weather)),
            catchError(err => of(new fromActions.LoadWeatherMainFail(err)))
          )
        )
      );
    }, { dispatch: false }    
    )
}