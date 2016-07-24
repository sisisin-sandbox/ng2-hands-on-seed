import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
  getHeroes() {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 2000));
  }
} 
