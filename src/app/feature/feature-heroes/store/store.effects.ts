import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Hero } from '../model/hero';
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
        return this.heroService.saveHero({...action.hero, name: action.name} as Hero).pipe(
          map((hero) => StoreActions.saveHeroSuccess({ hero })),
          catchError((error) =>
            of(StoreActions.saveHeroFailure({ error: error.message }))
          )
        );
      })
    )
  );

  searchHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StoreActions.search),
      switchMap((action) => {
        return this.heroService.searchHeroes(action.term).pipe(
          map((heroes) => StoreActions.searchSuccess({ heroes })),
          tap(()=> this.router.navigate(['/dashboard'])),
          catchError((error) =>
            of(StoreActions.searchFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService, private router: Router) { }
}
