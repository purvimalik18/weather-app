import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:"main", component: MainPageComponent},
  {path: "weatherInfo", component: WeatherInfoComponent},
  {path: "hourlyForecast",redirectTo: '/hourlyForecast'},
  {path: "hourlyForecast", component: HourlyForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
