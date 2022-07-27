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
  val: Weather | undefined;

  constructor(private http: HttpClient,
    private store: Store) {
   }

  getWeatherForCity(city: string): Observable<Weather> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    
  
  return this.http.post<Weather>(path, city);
    
  }


  loadCity(): Observable<any>{
    return this.http.get("./assets/files/city.list.json");
  }
}
