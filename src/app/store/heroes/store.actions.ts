import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../../hero';

export const loadHeroes = createAction('[Heroes] loadHeroes');
export const loadHeroesSuccess = createAction('[Heroes] loadHeroesSuccess', props<{ heroes: Hero[] }>());
export const loadHeroesFailure = createAction('[Heroes] loadHeroesFailure', props<{ error: string }>());
