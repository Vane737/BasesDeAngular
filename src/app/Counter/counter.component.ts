import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <h3> Counter:  {{ counter }} </h3>
    <button (click)="increaseBy(-1)"> -1 </button>
    <button (click)="reset()"> reset </button>
    <button (click)="increaseBy(+1)"> +1 </button>
  </div>
`
})

export class CounterComponent  {

  public title: string = 'Primeros pasos en Angular';
  public counter: number = 10;

  increaseBy( value : number ) : void {
    this.counter+= value;
  }

  reset() : void {
    this.counter= 10;
  }
}
