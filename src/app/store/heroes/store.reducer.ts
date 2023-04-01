import { createFeature, createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../hero';
import { initialState } from './store.state';
import * as StoreActions from './store.actions';
import { state } from '@angular/animations';

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
  }))

);
