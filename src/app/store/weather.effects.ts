import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { WeatherDataService } from "../services/weather-data.service";
import { loadWeatherSuccess, loadWeather } from "./weather.actions";

@Injectable()
export class WeatherEffects{

    constructor(private actions$: Actions, private api: WeatherDataService){}

    loadWeather$ = createEffect(() => {
      return this.actions$.pipe(ofType(loadWeatherSuccess), mergeMap((action) => {
        return this.api.getWeatherForCity(action.post.name).pipe(map((data) => {
            console.log(data);
            const weather = {...action.post};
            return loadWeatherSuccess({...action});
        }
            ));
      }))  
    }, {dispatch : false})
}