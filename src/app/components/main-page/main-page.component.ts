import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/models/weather.interface';
import { HeaderComponent } from '../header/header.component';
import * as fromStore from "../../store";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  weatherInfo$!: Observable<Weather>;
  city=[];
  selectedCity ="";
  isSelectOpen!: boolean;
  weather!: Weather;
  
  constructor(private store: Store,
      private api: WeatherDataService,
      private router: Router,
      private component: HeaderComponent) {  }

  ngOnInit(): void {
  }

  addWeatherData(event: any){
    this.store.dispatch(new fromStore.LoadWeatherMain(event));
    this.weatherInfo$ = this.store.select(fromStore.getWeatherDataState);
    console.log(this.weatherInfo$);
    this.weatherInfo$.subscribe(weather => (this.weather = weather));
    console.log(this.weather);
    // this.store.dispatch(new fromStore.LoadKey(position.city));
    // this.store.dispatch(new fromStore.LoadWeather(position));
    // this.store.dispatch(new fromStore.LoadForecast(position));
    // this.position$ = this.store.select(fromStore.getCondition);
    // this.position$.subscribe(position => (this.position = position));
  }

  onSubmit() {
    const val = this.weatherInfo$;
    if (val) {
      this.router.navigate(['/header']); 
    }
  }

}
