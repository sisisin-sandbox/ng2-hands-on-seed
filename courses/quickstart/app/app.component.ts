import {Component} from '@angular/core'
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

const HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Component({
  selector: 'my-app'
  , template: `
    <h1>{{title}}</h1>
    <h2>My Heros</h2>
    <ul class="heros">
      <li [class.selected]="hero === selectedHero" *ngFor="let hero of heros" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
  , directives: [HeroDetailComponent]
})
export class AppComponent {
  title = 'Tour of Heros';
  heros = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
