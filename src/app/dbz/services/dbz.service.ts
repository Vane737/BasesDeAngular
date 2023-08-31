import { v4 as uuid } from 'uuid';

import { Injectable } from '@angular/core';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 10500
  },
  {
    id: uuid(),
    name: "Goku",
    power: 9500
  }
]

addCharacter(character: Character):void {

  const newCharacter = { id: uuid(), ...character };
  console.log("Father", newCharacter);
  this.characters.push(newCharacter);
}

onDeleteCharacterById( id: string ):void {
  this.characters = this.characters.filter( character => character.id !== id )
}

}
