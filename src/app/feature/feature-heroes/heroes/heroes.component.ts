import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../hero';
import { HeroesFacade } from '../../store/heroes/store.facade';

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
    this.facade.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.facade.add({ name } as Hero);
  }

  delete(hero: Hero): void {
    this.facade.delete(hero.id);
  }

}
