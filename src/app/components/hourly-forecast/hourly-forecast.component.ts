import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HourlyForecast } from 'src/app/models/hourlyForecast.interface';
import { Weather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import * as fromStore from "../../store";

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit {
  weather!: Weather;
  icon!: string;
  day!: string
  dd!: number;
  mm!: number;
  forecast$!: Observable<HourlyForecast>
  forecastData!: HourlyForecast;
  hh!: number;
  min!: number;
  weatherData$!: Observable<Weather>;

  constructor(private api: WeatherDataService, private store: Store) { }

  ngOnInit(): void {
    this.weatherData$ = this.store.select(fromStore.selectWeather);
    this.weatherData$.subscribe((weather: Weather) =>{
      this.weather = weather;
    } ); 
    this.store.dispatch(new fromStore.LoadHourlyForecastMain({lat: this.weather.coord.lat, lon: this.weather.coord.lon}));
    this.forecast$ = this.store.select(fromStore.selectHourlyForecast);
    this.forecast$.subscribe((forecast: HourlyForecast) =>{
      this.forecastData = forecast
    } ); 
  ;
    
  }

  getData(data: any){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(data.dt * 1000);
    this.day = days[d.getDay()];
    this.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    this.dd = new Date(data.dt*1000).getDate();
    this.mm = new Date(data.dt*1000).getMonth() +1;
    this.hh = new Date(data.dt*1000).getHours();
    this.min = new Date(data.dt*1000).getMinutes();
  }

}
