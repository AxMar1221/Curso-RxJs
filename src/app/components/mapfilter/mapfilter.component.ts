import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-mapfilter',
  templateUrl: './mapfilter.component.html',
})
export class MapfilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nums = of(1, 2, 3, 4, 5, 6);
    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map(n => n * n)
    );
    const cuadrado = alCuadrado(nums);
    cuadrado.subscribe(x => console.log(x))
  }
}
