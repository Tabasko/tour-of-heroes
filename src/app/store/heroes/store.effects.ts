import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HeroService } from '../../hero.service';
import * as StoreActions from './store.actions';

@Injectable()
export class HeroesEffects {

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.loadHeroes),
      switchMap(() => {
        return this.heroService.getHeroes().pipe(
          map((heroes) => StoreActions.loadHeroesSuccess({ heroes })),
          catchError((error) =>
            of(StoreActions.loadHeroesFailure({ error: error.message }))
          )
        );
      })
    )
  );


  constructor(private actions$: Actions, private heroService: HeroService) { }
}
