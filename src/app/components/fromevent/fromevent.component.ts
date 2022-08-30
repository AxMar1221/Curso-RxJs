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
    const clicks = fromEvent(document, 'mousemove');
    clicks.subscribe((e: any)=>{
      console.log(`Coords: X: ${e.clientX}, Y ${e.clientY}`);
    });
  }
}

