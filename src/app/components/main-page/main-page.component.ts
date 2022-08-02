import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Weather } from 'src/app/models/weather.interface';
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
  weather!: Weather ;
  iconPath!: string;
  
  constructor(private store: Store,
      private router: Router, 
      private api: WeatherDataService) {  }

  ngOnInit(): void {
    this.api.getDefaultData().subscribe((data: Weather) => {
      this.weather = data;
      this.iconPath = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";
    } );
    
  }

  addWeatherData(event: any){
    this.store.dispatch(new fromStore.LoadWeatherMain(event));
    this.weatherInfo$ = this.store.select(fromStore.selectWeather);
    this.weatherInfo$.subscribe(weather =>{
      this.api.setWeather(weather);
      this.weather = weather
      this.iconPath = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png";
    } );
    
    
    
  }

  onSubmit() {
    const val = this.weatherInfo$;
    if (val) {
      this.router.navigate(['/header']); 
    }
  }

}
