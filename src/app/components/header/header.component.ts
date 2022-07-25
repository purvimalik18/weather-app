import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Weather } from 'src/app/models/weather.interface';
import { __asyncValues } from 'tslib';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { WeatherState } from 'src/app/store';
import * as fromStore from "../../store/selectors/weather.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  weatherInfo$!: Weather
  iconSrc: any;
  weatherData!: { };

  constructor(private api: WeatherDataService,
    private store: Store<WeatherState> ) { }

  ngOnInit(): void { 
    this.store.select(fromStore.getWeather).subscribe(data => (this.weatherData = data));
    console.log(this.weatherData);
  }
}
