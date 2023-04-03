import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/feature/feature-heroes/model/hero';
import * as fromActions from './store.actions';
import * as heroesSelector from './store.selectors';
import { HeroesState } from './store.state';

@Injectable()
export class HeroesFacade {

  loading$: Observable<boolean>;
  heroes$: Observable<Hero[]>;
  hero$: Observable<Hero | undefined>;
  error$: Observable<string | null>;
  searchResult$: Observable<Hero[] | undefined>;

  constructor(private store: Store<HeroesState>) { 
    this.loading$ = this.store.select(heroesSelector.loadingSelector);
    this.hero$ = this.store.select(heroesSelector.heroSelector);
    this.heroes$ = this.store.select(heroesSelector.heroesSelector);
    this.error$ = this.store.select(heroesSelector.errorSelector);
    this.searchResult$ = this.store.select(heroesSelector.searchResultSelector);
  }

  getHero(id: number): void {
    this.store.dispatch(fromActions.getHero({id}));
  }

  search(term: string): void {
    console.log("search");
    
    this.store.dispatch(fromActions.search({term}));
  }

  loadHeroes(): void {
    this.store.dispatch(fromActions.loadHeroes());
  }

  add(hero: Hero): void {
    this.store.dispatch(fromActions.addHero({hero}));
  }

  delete(id: number): void {
    this.store.dispatch(fromActions.deleteHero({id}));
  }

  save(hero: Hero, name: string): void {
    this.store.dispatch(fromActions.saveHero({hero: hero, name: name}));
  }

  resetSearchResult() {
    this.store.dispatch(fromActions.resetSearch());
  }


}