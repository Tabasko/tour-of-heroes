import { Component, OnDestroy, OnInit } from "@angular/core";
import { startWith, Subscription, switchMap, timer } from "rxjs";
import { ExcelService } from "../excel.service";
import { Hero } from "../model/hero";
import { HeroService } from "../service/hero.service";
import { HeroesFacade } from "../store/store.facade";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  timeInterval?: Subscription;
  errorMessage?: string;

  constructor(private heroesFacade: HeroesFacade, private heroService: HeroService, private excelService: ExcelService) {
    //this.heroes$ = heroesFacade.heroes$;
  }
  ngOnDestroy(): void {
    console.log("Unsubscribe timer");

    this.timeInterval?.unsubscribe();
  }

  exportExcel() {

  }

  startPolling() {

    console.log("start polling");

    this.timeInterval = timer(10, 5000)
      .pipe(
        startWith(0),
        switchMap(() => this.heroService.getHeroes())
      ).subscribe({
        next: (data) => {
          console.log(new Date() + "  " + this.heroes);
          this.heroes?.push(data[0]);
        },
        error: error => console.log("Error"),
        complete: () => console.log("Complete")
      }
      );
  }

  stopPolling() {
    console.log("Stop polling");

    this.timeInterval?.unsubscribe();
  }

  ngOnInit(): void {

  }

  getHeroes(): void {
    this.heroesFacade.loadHeroes();
  }
}
