import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Superman'},
    { id: 2, name: 'Spiderman'},
    { id: 3, name: 'Batman'},
    { id: 4, name: 'Dr Strange'},
    { id: 5, name: 'Wonder Woman'},
    { id: 6, name: 'Deadpool'},
    { id: 7, name: 'Homelander'},
    { id: 8, name: 'Naruto'},
    { id: 9, name: 'Catwoman'},
    { id: 10, name: 'Sasuke Uchiha'},
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
