import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = "Peter";
  public age: number = 30;
  public namecap: string = "Peter Parker";

  metodo(): void {
    
  }

}
