import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { MapfilterComponent } from './components/mapfilter/mapfilter.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ObservablesComponent,
    IntervalTimerComponent,
    NavbarComponent,
    FromeventComponent,
    MapfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
