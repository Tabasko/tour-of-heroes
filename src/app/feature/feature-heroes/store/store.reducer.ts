import { createReducer, on } from '@ngrx/store';
import { Hero } from '../model/hero';
import * as StoreActions from './store.actions';
import { initialState } from './store.state';

export const storeFeatureKey = 'heroes-store';

export const reducers = createReducer(
  initialState,
  on(StoreActions.loadHeroes, (state) => ({ ...state, loading: true })),
  on(StoreActions.loadHeroesSuccess, (state, action) => (
    {
      ...state,
      loading: false,
      heroes: action.heroes,
    }
  )),
  on(StoreActions.loadHeroesFailure, (state, action) => ({
    ...state,
    loading: false,
    heroes: [],
    error: action.error
  })),

  on(StoreActions.addHero, (state, action) => (
    {
      ...state,
      loading: true
    }
  )),
  on(StoreActions.addHeroSuccess, (state, action) => (
    {
      ...state,
      loading: false,
      heroes: [...state.heroes, action.hero]
    }
  )),
  on(StoreActions.addHeroFailure, (state, action) => ({
    ...state,
    loading: false,
    heroes: [],
    error: action.error
  })),
  on(StoreActions.deleteHero, (state, action) => (
    {
      ...state,
      loading: true
    }
  )),
  on(StoreActions.deleteHeroSuccess, (state, action) => (
    {
      ...state,
      loading: false,
      heroes: state.heroes.filter((h: Hero) => h.id !== action.id)
    }
  )),
  on(StoreActions.deleteHeroFailure, (state, action) => ({
    ...state,
    loading: false,
    heroes: [],
    error: action.error
  })),
  on(StoreActions.getHero, (state, action) => (
    {
      ...state,
      loading: true
    }
  )),
  on(StoreActions.getHeroSuccess, (state, action) => (
    {
      ...state,
      loading: false,
      hero: action.hero
    }
  )),
  on(StoreActions.getHeroFailure, (state, action) => ({
    ...state,
    loading: false,
    heroes: [],

    error: action.error
  })),

  on(StoreActions.saveHero, (state, action) => (
    {
      ...state,
      loading: true
    }
  )),
  on(StoreActions.saveHeroSuccess, (state, action) => {
    const heroes = state.heroes.map(
      // qa: update new hero like this?
      hero => action.hero.id === hero.id ? action.hero : hero
    );
    return {
      ...state,
      loading: false,
      heroes: heroes
    };
  }
  ),
  on(StoreActions.saveHeroFailure, (state, action) => ({
    ...state,
    loading: false,
    heroes: [],
    error: action.error
  })),
  on(StoreActions.search, (state, action) => (
    {
      ...state,
      loading: true,

    }
  )),
  on(StoreActions.searchSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      searchResult: action.heroes
    };
  }
  ),
  on(StoreActions.searchFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error

  })),
  on(StoreActions.resetSearch, (state, action) => (
    {
      ...state,
      loading: true,
      searchResult: undefined

    }
  )),
);
