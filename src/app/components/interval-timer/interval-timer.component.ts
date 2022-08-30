import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const contador = interval(1000);
    // contador.subscribe((n)=>{
    //   console.log(`cada ${n} segundos`)
    // });
    const contador2 = timer(2000);
    contador2.subscribe((n)=>{
      console.log(`cada ${n} segundos`)
    });
  }
}
