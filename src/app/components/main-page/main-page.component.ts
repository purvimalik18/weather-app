import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { loadWeatherSuccess } from 'src/app/store/weather.actions';
import { weather } from 'src/app/store/weather.interface';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  cities: City[] = [];
  weather!: weather;
  selectedCity!: City;
  city =[];

  constructor(private store: Store,
      private api: WeatherDataService) { 
  
    this.api.loadCity().subscribe(data => {
      this.cities = data;
    });
  }

  ngOnInit(): void {
  }

  addWeatherData(event: any){
    this.api.getWeatherForCity(event.name).subscribe((data)=>{
      this.weather =data;
  });

  this.store.dispatch(loadWeatherSuccess({
    post: this.weather
  }));
  }

}
