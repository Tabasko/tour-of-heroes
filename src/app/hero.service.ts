import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }


  getHero(id: number) {
    const hero = HEROES.find(h => h.id == id);
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
