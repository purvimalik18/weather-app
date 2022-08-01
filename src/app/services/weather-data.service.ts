import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import { Forecast } from '../models/forecast.interface';
import { Weather } from '../models/weather.interface';
import {WeatherActions} from '../store'

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  val: Weather | undefined;
  updateWeather!: Weather;  
  

  constructor(private http: HttpClient,
    private store: Store) {
   }

  getWeatherForCity(city: string): Observable<Weather> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
  return this.http.post<Weather>(path, city);
    
  }

  getForecast(lat: number, lon: number): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=508aa780a9e51edc6a0e4f3e55d85ab9`;
   
    return this.http.get(path);
  }


  loadCity(): Observable<any>{
    return this.http.get("./assets/files/city.list.json");
  }


  

    setWeather(data: Weather) {
        this.updateWeather = data; 
}

getWeather(){
  return this.updateWeather;
}
}
