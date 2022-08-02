import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.interface';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {
  weather!: Weather;
  icon!: string;
  day!: string
  dd!: number;
  mm!: number;
  forecastData: any;
  hh!: number;
  min!: number;

  constructor(private api: WeatherDataService) { }

  ngOnInit(): void {
    this.weather = this.api.getWeather();
    this.api.getHourlyForecast(this.weather.coord.lat, this.weather.coord.lon).subscribe(data => 
      this.forecastData = data
  );
    
  }

  getData(data: any){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(data.dt * 1000);
    this.day = days[d.getDay()];
    this.icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    this.dd = new Date(data.dt*1000).getDate();
    this.mm = new Date(data.dt*1000).getMonth();
    this.hh = new Date(data.dt*1000).getHours();
    this.min = new Date(data.dt*1000).getMinutes();
  }

}
