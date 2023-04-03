import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroesFacade } from '../store/store.facade';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero | undefined>;
  name?: string;
  
  constructor(
    private heroesFacade: HeroesFacade,
    private route: ActivatedRoute,
  ) { 
    this.hero$ = heroesFacade.hero$;
  }

  ngOnInit(): void {
    this.heroesFacade.getHero(Number(this.route.snapshot.paramMap.get('id')));
  }

  save(hero: Hero): void {
    if (hero) {      
      this.heroesFacade.save(hero, this.name as string);
    }
  }

}
