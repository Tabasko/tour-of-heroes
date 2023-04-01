import { HeroesState } from './store.state';
import * as fromActions from './store.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as heroesSelector from './store.selectors';
import { Hero } from 'src/app/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesFacade {

  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  error$: Observable<string | null>;

  constructor(private store: Store<HeroesState>) { 
    this.loading$ = this.store.select(heroesSelector.loadingSelector);
    this.heroes$ = this.store.select(heroesSelector.heroesSelector);
    this.error$ = this.store.select(heroesSelector.errorSelector);
  }

  getHeroes(): void {
    this.store.dispatch(fromActions.loadHeroes());
  }

  add(hero: Hero): void {
    this.store.dispatch(fromActions.addHero({hero}));
  }

  delete(id: number): void {
    this.store.dispatch(fromActions.deleteHero({id}));
  }


}