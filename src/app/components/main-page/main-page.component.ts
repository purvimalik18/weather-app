import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/models/weather.interface';
import { HeaderComponent } from '../header/header.component';
import * as fromStore from "../../store";
import { Observable } from 'rxjs';
import { WeatherDataState } from '../../store';


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
    this.weatherInfo$ = this.store.select(fromStore.selectWeather);
    //console.log(this.weatherInfo$);
    this.weatherInfo$.subscribe(weather => (this.weather = weather));
  }

  onSubmit() {
    const val = this.weatherInfo$;
    if (val) {
      this.router.navigate(['/header']); 
    }
  }

}
