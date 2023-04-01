import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import * as fromActions from '../store/heroes/store.actions';
import * as fromSelectors from '../store/heroes/store.selectors';
import { HeroesState } from '../store/heroes/store.state';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$ = this.store.pipe(select(fromSelectors.heroesSelector));
  loading$ = this.store.pipe(select(fromSelectors.loadingSelector));
  error$ = this.store.pipe(select(fromSelectors.errorSelector));

  constructor( private heroService: HeroService, private messageService: MessageService, private store: Store<HeroesState>) {
    // qa: why not here
    //this.loading$ = this.store.pipe(select(fromSelectors.loadingSelector));
    //this.heroes$ = this.store.pipe(select(fromSelectors.heroesSelector));
    //this.error$ = this.store.pipe(select(fromSelectors.errorSelector));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(fromActions.loadHeroes());
    //this.heroService.getHeroes() .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  add(name: string): void {}

  delete(hero: Hero): void {}

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe((hero: any) => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter((h: Hero) => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }


}
