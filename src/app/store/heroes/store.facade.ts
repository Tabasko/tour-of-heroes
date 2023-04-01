import { HeroesState } from './store.state';
import * as fromActions from './store.actions';
import { Action, Store } from '@ngrx/store';
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

  dispatch(action: Action){
    this.store.dispatch(action);
  }

  getHeroes(): void {
    this.dispatch(fromActions.loadHeroes());
  }


}