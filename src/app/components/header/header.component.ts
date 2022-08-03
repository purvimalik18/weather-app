import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.interface';
import { __asyncValues } from 'tslib';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import * as fromStore from "../../store";
import { Forecast } from 'src/app/models/forecast.interface';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  weather!: Weather;
  icon!: string;
  time = new Date();
  timeDisplay!: any;
  index = 0;
  forecastData$!: Observable<Forecast>;
  weatherData$!: Observable<Weather>;
  forecast!: Forecast;
  day: any;
  dd: any;
  mm: any;

  constructor(private api: WeatherDataService,
    public datepipe: DatePipe, private store: Store
     ) { }

  ngOnInit(): void { 
    this.weatherData$ = this.store.select(fromStore.selectWeather);
    this.weatherData$.subscribe((weather: Weather) =>{
      this.weather = weather;
      this.icon = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";
    } ); 
    
    this.timeDisplay = this.time.toLocaleString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' });

    this.store.dispatch(new fromStore.LoadForecastMain({lat: this.weather.coord.lat, lon: this.weather.coord.lon}));
    this.forecastData$ = this.store.select(fromStore.selectForecast);
    this.forecastData$.subscribe((forecast: Forecast) =>{
      this.forecast = forecast
    } ); 
  }

  handleChange(e: any){
    this.index = e.index;
}

  getData(data: any){
    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    var d = new Date(data.dt * 1000);
    this.day = days[d.getDay()];
    this.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    this.dd = new Date(data.dt*1000).getDate();
    this.mm = new Date(data.dt*1000).getMonth();
  }
}
