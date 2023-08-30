import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listHero: string[] = ["Ironman", "Spiderman", "Hulk", "She Hulk", "Antman"]
  deletedHero?: string;

  deleteLastHero(): void {
    this.deletedHero = this.listHero.pop();
  }
}
