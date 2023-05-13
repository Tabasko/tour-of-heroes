import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription, interval, startWith, switchMap, timer } from "rxjs";
import { Hero } from "../model/hero";
import { HeroesFacade } from "../store/store.facade";
import { HeroService } from "../service/hero.service";
import { ExcelService } from "../excel.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy{
  heroes: Hero[] = [];
  timeInterval?: Subscription;
  errorMessage?: string;

  constructor(private heroesFacade: HeroesFacade, private heroService: HeroService, private excelService: ExcelService) {
    //this.heroes$ = heroesFacade.heroes$;
  }
  ngOnDestroy(): void {
    this.timeInterval?.unsubscribe();
  }

  exportexcel(){

  }

  ngOnInit(): void {
    this.getHeroes();

    this.timeInterval = timer(5000, 10000)
    .pipe(
      startWith(0),
      switchMap(()=> this.heroService.getHeroes())
    ).subscribe({
      next: (data) => {
        console.log(this.heroes);
        this.heroes?.push(data[0]);
      }
        ,
      error: error => this.errorMessage= error,
      complete: () => {}}
    );

  }

  getHeroes(): void {
    this.heroesFacade.loadHeroes();
  }
}
