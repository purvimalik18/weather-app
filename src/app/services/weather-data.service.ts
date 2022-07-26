import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Weather } from '../models/weather.interface';
import {WeatherActions} from '../store'

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient,
    private store: Store) {
   }

  getWeatherForCity(city: string): Observable<Weather> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;

    return this.http.post<Weather>(path, city);
    // let isMetric = localStorage.getItem("isMetric") == "true" ? true : false;
    
    // const val =  this.http.get<Weather[]>(path)
    //   .pipe(
    //     map((weather: Weather[]) =>
    //       weather.map(position => ({
    //         city: city,
    //         country: position.sys.country,
    //         temperature: position.main.temp,
    //         icon: position.weather[0].icon,
    //         weathertype: position.weather[0].main,
    //         isMetric: isMetric
    //       }))
    //     )
    //   );
    //   console.log(val);
    //   return val;
    
  }


  loadCity(): Observable<any>{
    return this.http.get("./assets/files/city.list.json");
  }
}
