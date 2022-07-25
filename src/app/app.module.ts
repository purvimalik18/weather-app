import { NgModule } from '@angular/core';
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
import { TodayTabPageComponent } from './components/today-tab-page/today-tab-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ComponentStore } from '@ngrx/component-store';
import { weathersReducers } from './store/reducers';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TodayTabPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(weathersReducers),
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([])
  ],
  providers: [Store, HeaderComponent, ComponentStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
