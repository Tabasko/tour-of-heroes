import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../hero';

export const loadHeroes = createAction('[Heroes] loadHeroes');
export const loadHeroesSuccess = createAction('[Heroes] loadHeroesSuccess', props<{ heroes: Hero[] }>());
export const loadHeroesFailure = createAction('[Heroes] loadHeroesFailure', props<{ error: string }>());

export const addHero = createAction('[Heroes] addHero', props<{ hero: Hero }>());
export const addHeroSuccess = createAction('[Heroes] addHero Success', props<{ hero: Hero }>());
export const addHeroFailure = createAction('[Heroes] addHero Failure', props<{ error: string }>());

export const deleteHero = createAction('[Heroes] deleteHero', props<{ id: number }>());
export const deleteHeroSuccess = createAction('[Heroes] deleteHero Success', props<{ id: number }>());
export const deleteHeroFailure = createAction('[Heroes] deleteHero Failure', props<{ error: string }>());

export const getHero = createAction('[Heroes] getHero', props<{ id: number }>());
export const getHeroSuccess = createAction('[Heroes] getHero Success', props<{ hero: Hero }>());
export const getHeroFailure = createAction('[Heroes] getHero Failure', props<{ error: string }>());

export const saveHero = createAction('[Heroes] saveHero', props<{ hero: Hero }>());
export const saveHeroSuccess = createAction('[Heroes] saveHero Success', props<{ hero: Hero }>());
export const saveHeroFailure = createAction('[Heroes] saveHero Failure', props<{ error: string }>());

