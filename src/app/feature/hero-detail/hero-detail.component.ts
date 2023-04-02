import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroesFacade } from '../store/heroes/store.facade';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private heroesFacade: HeroesFacade,
    private route: ActivatedRoute,
    private location: Location
  ) {
    // qa: unsubscribe?
    this.heroesFacade.hero$.subscribe(
      (hero) => this.hero =  hero
    );
  }

  ngOnInit(): void {
    this.heroesFacade.getHero(Number(this.route.snapshot.paramMap.get('id')));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroesFacade.save(this.hero);
      this.goBack();
    }
  }

}
