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

  // AHA: Avoid hasty abstractions - Kent C. Dodds
  // Don't abstract away your actions and use createSelector to compose state ...
  //dispatch(action: Action){
  //  this.store.dispatch(action);
  //}

  getHeroes(): void {
    this.store.dispatch(fromActions.loadHeroes());
  }

  add(name: string): void {}

  delete(hero: Hero): void {}


}