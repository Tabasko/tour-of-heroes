import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
    debounceTime, distinctUntilChanged
} from 'rxjs/operators';
import { Hero } from '../../../model/hero';
import { HeroesFacade } from '../../../store/store.facade';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[] | undefined>;
  private searchTerms = new Subject<string>();

  constructor(private heroesFacade: HeroesFacade) {
    this.heroes$ = heroesFacade.searchResult$;
  }
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // qa: if not reset store here, then the last search is always shown
    this.heroesFacade.resetSearchResult();
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      ).subscribe(
        // qa: do i need to subscribe here?
        (term) => this.heroesFacade.search(term)
    );
  }

  ngOnDestroy(): void {
    this.searchTerms.unsubscribe();
  }

}