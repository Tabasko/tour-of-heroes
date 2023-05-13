import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, tap, startWith, Subscription, switchMap, timer, finalize } from "rxjs";
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
  loading = false;

  constructor(private heroesFacade: HeroesFacade, private heroService: HeroService, private excelService: ExcelService) {
    //this.heroes$ = heroesFacade.heroes$;
  }

  ngOnDestroy(): void {
    console.log("Unsubscribe timer");

    this.timeInterval?.unsubscribe();
  }

  exportExcel() {
    this.heroService.getHeroes().subscribe(
      (d) => {
        const data = d.map((items) => {
          return {
            "Name": items.name,
            "ID": items.id
          }
        }
        );
        this.excelService.exportToExcel(
          data,
          'yourExcelFile-' + new Date().getTime());
      }
    );


  }

  startPolling() {

    console.log("start polling");

    this.timeInterval = timer(10, 2000)
      .pipe(
        startWith(0),
        switchMap(() => this.getData()),
      ).subscribe({
        next: (data) => {
          setTimeout(() => {
            this.loading = false;
          }, 250);
          this.heroes?.push(data[0]);
        },
        error: error => console.log("Error"),
        complete: () => console.log("Complete")
      }
      );
  }

  getData(): Observable<Hero[]> {
    this.loading = true;
    return this.heroService.getHeroes();
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
