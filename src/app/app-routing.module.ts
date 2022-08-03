import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {path:"main", component: MainPageComponent},
  {path: "header", component: HeaderComponent},
  {path: "weatherMain",redirectTo: '/weatherMain'},
  {path: "weatherMain", component: HourlyForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
