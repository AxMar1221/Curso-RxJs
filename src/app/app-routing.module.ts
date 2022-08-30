import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromeventComponent } from './components/fromevent/fromevent.component';
import { HomeComponent } from './components/home/home.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { ObservablesComponent } from './components/observables/observables.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'obser', component: ObservablesComponent},
  { path: 'inter-timer', component: IntervalTimerComponent},
  { path: 'fromevent', component: FromeventComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
