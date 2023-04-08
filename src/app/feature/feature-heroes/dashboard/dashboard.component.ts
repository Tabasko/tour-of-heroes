import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../model/hero";
import { HeroesFacade } from "../store/store.facade";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroesFacade: HeroesFacade) {
    this.heroes$ = heroesFacade.heroes$;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesFacade.loadHeroes();
  }
}
