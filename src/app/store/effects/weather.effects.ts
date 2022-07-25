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

    @Effect()
    loadWeather$: Observable<Action> = this.actions$.pipe(
      ofType<fromActions.LoadWeather>(fromActions.WeatherActionTypes.LOAD_WEATHER),
      map((action: fromActions.LoadWeather) => action.payload),
      mergeMap((weather: Weather) =>
        this.api.getWeatherForCity(weather.name).pipe(
          map((position: Weather) => new fromActions.LoadWeatherSuccess(weather)),
          catchError(err => of(new fromActions.LoadWeatherFail(err)))
        )
      )
    );
}