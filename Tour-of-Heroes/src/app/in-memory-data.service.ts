import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Brimstone' },
      { id: 2, name: 'Viper' },
      { id: 3, name: 'Omen' },
      { id: 4, name: 'Killjoy' },
      { id: 5, name: 'Cypher' },
      { id: 6, name: 'Sova' },
      { id: 7, name: 'Sage' },
      { id: 9, name: 'Phoenix' },
      { id: 10, name: 'Jett' },
      { id: 11, name: 'Reyna' },
      { id: 12, name: 'Raze' },
      { id: 13, name: 'Breach' },
      { id: 14, name: 'Skye' },
      { id: 15, name: 'Yoru' },
      { id: 16, name: 'Astra' },
      { id: 17, name: 'KAY/O' },
      { id: 18, name: 'Chamber' },
      { id: 19, name: 'Neon' },
      { id: 20, name: 'Fade' },
      { id: 21, name: 'Harbor' },
      { id: 22, name: 'Gekko' },
      { id: 23, name: 'Deadlock' },
      { id: 24, name: 'Iso' },
      { id: 25, name: 'Clove' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}