import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes'
  , templateUrl: 'app/heroes.component.html'
  , directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heros';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService
    , private router: Router
  ) { }
  getHeroes() {
    this.heroService
      .getHeroes()
      .then((heroes) => this.heroes = heroes);
  }
  ngOnInit() { this.getHeroes(); }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() { this.router.navigate(['/detail', this.selectedHero.id]) }
}
