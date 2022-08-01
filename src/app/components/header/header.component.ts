import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.interface';
import { __asyncValues } from 'tslib';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import * as fromStore from "../../store/selectors/weather.selectors";
import { WeatherDataState } from 'src/app/store/reducers/weather.reducers';
import { MainPageComponent } from '../main-page/main-page.component';
import { Forecast } from 'src/app/models/forecast.interface';
import { DatePipe } from '@angular/common';

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
  forecastData!: Forecast;
  dayName!: any

  constructor(private api: WeatherDataService,
    public datepipe: DatePipe
     ) { }

  ngOnInit(): void { 
    this.weather = this.api.getWeather();
    this.icon = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";
    this.timeDisplay = this.time.toLocaleString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric', timeZoneName: 'short' });
    this.api.getForecast(this.weather.coord.lat, this.weather.coord.lon).subscribe(data => this.forecastData = data);
  }

  handleChange(e: any){
    this.index = e.index;
    let latest_date =this.datepipe.transform(this.forecastData.list[0].dt, 'yyyy-MM-dd');
    console.log(latest_date)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(this.forecastData.list[0].dt * 1000);
    this.dayName = days[d.getDay()];
  }
}
