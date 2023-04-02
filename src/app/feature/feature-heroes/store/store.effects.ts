import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Hero } from 'src/app/feature/feature-heroes/model/hero';
import { HeroService } from '../service/hero.service';
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

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.addHero),
      switchMap((action) => {
        return this.heroService.addHero(action.hero).pipe(
          map((hero) => StoreActions.addHeroSuccess({ hero })),
          catchError((error) =>
            of(StoreActions.addHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );


  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.deleteHero),
      switchMap((action) => {
        return this.heroService.deleteHero(action.id).pipe(
          // qa 1: why not hero as parameter to deleteHeroSuccess
          map((hero) => StoreActions.deleteHeroSuccess({ id: action.id })),
          catchError((error) =>
            of(StoreActions.deleteHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.getHero),
      switchMap((action) => {
        return this.heroService.getHero(action.id).pipe(
          map((hero) => StoreActions.getHeroSuccess({ hero })),
          catchError((error) =>
            of(StoreActions.getHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  saveHero$ = createEffect(() =>
  this.actions$.pipe(
    ofType(StoreActions.saveHero),
    switchMap((action) => {
      return this.heroService.updateHero(action.hero).pipe(
        tap((hero)=> console.log("effect action" + action.hero)),
        tap((hero)=> console.log("effect hero" + hero)),
        map((hero) => StoreActions.saveHeroSuccess({hero})),
        catchError((error) =>
          of(StoreActions.saveHeroFailure({ error: error.message }))
        )
      );
    })
  )
);

  constructor(private actions$: Actions, private heroService: HeroService) { }
}
