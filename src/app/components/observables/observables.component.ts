import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  observable:any;

  constructor() {}

  ngOnInit(): void {
    this.observable = Observable.create( function (observer: { next: (arg0: number) => void; complete: () => void; }) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
  });
}

rxjsFun(){
  console.log('just before subscribe');
  this.observable.subscribe({
    next: (x: string) => console.log('got value ' + x),
    error: (err: string) => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
  });
  console.log('just after subscribe');}
  }

