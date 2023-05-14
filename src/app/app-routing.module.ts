import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CssSandboxContainerComponent } from "./feature/feature-css-sandbox/components/css-sandbox-container/css-sandbox-container.component";
import { DetailsContainerComponent } from "./feature/feature-details/components/details-container/details-container.component";
import { DashboardComponent } from "./feature/feature-heroes/dashboard/dashboard.component";
import { HeroDetailComponent } from "./feature/feature-heroes/detail/hero-detail.component";
import { HeroesComponent } from "./feature/feature-heroes/heroes/heroes.component";
import { NewWizzardContainerComponent } from "./feature/feature-new-wizzard/components/new-wizzard-container/new-wizzard-container.component";
import { ReactiveFormContainerComponent } from "./shared/reactive-form/components/reactive-form-container/reactive-form-container.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "heroes", component: HeroesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "feature-details/:id", component: DetailsContainerComponent },
  { path: "login", component: ReactiveFormContainerComponent },
  { path: "new", component: NewWizzardContainerComponent },
  { path: "css-sandbox", component: CssSandboxContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
