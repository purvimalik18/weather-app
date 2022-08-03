import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { ComponentStore } from '@ngrx/component-store';
import { weathersReducers } from './store/reducers/weather.reducers';
import { WeatherEffects } from './store';
import { ButtonModule } from "primeng/button";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from 'primeng/card';
import { DividerModule } from "primeng/divider";
import { DatePipe } from '@angular/common';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WeatherInfoComponent,
    HourlyForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(weathersReducers),
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([WeatherEffects]),
    ButtonModule,
    TabViewModule,
    CardModule,
    DividerModule
    
  ],
  providers: [Store, ComponentStore, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
