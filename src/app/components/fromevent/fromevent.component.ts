import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent implements OnInit {
  title = 'reactiveX';

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((e: any)=>{
      clicks.subscribe(x => console.log(x));
    });
  }
}

