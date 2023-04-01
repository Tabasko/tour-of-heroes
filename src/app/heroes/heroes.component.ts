import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroesFacade } from '../store/heroes/store.facade';
import * as fromActions from '../store/heroes/store.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  error$: Observable<string | null>;

  constructor(private facade: HeroesFacade) {
    this.heroes$ = this.facade.heroes$;
    this.loading$ = this.facade.loading$;
    this.error$ = this.facade.error$;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.facade.getHeroes();
  }

  add(name: string): void {
    this.facade.add(name);
  }


  delete(hero: Hero): void {
    this.facade.delete(hero);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe((hero: any) => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter((h: Hero) => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }


}
