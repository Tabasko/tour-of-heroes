import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromState from './store.state'
import * as fromReducer from './store.reducer'

export const selectFeature = createFeatureSelector<fromState.HeroesState>(
   fromReducer.storeFeatureKey
 );

export const loadingSelector = createSelector(
  selectFeature, 
  (state) => state.loading
);

export const heroesSelector = createSelector(
  selectFeature, 
  (state) => state.heroes
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);

export const heroSelector = createSelector(
  selectFeature, 
  (state) => state.hero
);

export const searchResultSelector = createSelector(
  selectFeature, 
  (state) => state.searchResult
);