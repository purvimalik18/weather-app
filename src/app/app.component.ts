import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  weatherData  = null;

  constructor(private api: WeatherDataService) {}

  ngOnInit() {
    
}
}
