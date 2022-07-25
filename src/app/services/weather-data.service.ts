import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Weather } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) {
   }

  getWeatherForCity(city: string): Observable<any> {
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`;
    return this.http.post(path, city);
  }

  // getWeather(city: string): Observable<any> {
  //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=695ed9f29c4599b7544d0db5c211d499`).pipe(
  //     map(() => ({
  //       ...city
  //     }))
  //   );
  // }

  loadCity(): Observable<any>{
    return this.http.get("./assets/files/city.list.json");
  }
}
