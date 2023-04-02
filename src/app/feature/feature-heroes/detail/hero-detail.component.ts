import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroesFacade } from '../store/store.facade';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero | undefined;

  constructor(
    private heroesFacade: HeroesFacade,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.heroesFacade.getHero(Number(this.route.snapshot.paramMap.get('id')));
    // qa: direclty, after above?
    this.heroesFacade.hero$.subscribe((hero) => {
      // qa: how?
      this.hero = Object.assign({}, hero);
      //this.hero = {...hero} as Hero
    }
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    if (hero) {
      console.log("save:" + hero);
      
      this.heroesFacade.save(hero);
      // qa: right?
      this.goBack();
    }
  }

}
