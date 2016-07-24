import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from '../entity/hero';
import {HeroService} from '../services/hero.service';

@Component({
  selector: 'my-dashboard'
  , templateUrl: 'app/views/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private heroService: HeroService
    , private router: Router
  ) { }
  ngOnInit() {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}