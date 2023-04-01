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
