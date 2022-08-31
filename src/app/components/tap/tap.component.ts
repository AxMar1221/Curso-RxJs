import { Component, OnInit } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap( ev => console.log('Procesado: '+ ev),
      err => console.log(err),
      ()=> console.log('Completado'))
    );
    positions.subscribe(pos => console.log(pos));
  }
}
