import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes$: Observable<Hero[]> | undefined = undefined;

  constructor(private heroService: HeroService, private messageService : MessageService) {
  }

  selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(hero.name)
    this.selectedHero = hero;
  }

}
