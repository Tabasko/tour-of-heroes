import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContainerComponent } from './feature/feature-details/components/details-container/details-container.component';
import { DashboardComponent } from './feature/feature-heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './feature/feature-heroes/detail/hero-detail.component';
import { HeroesComponent } from './feature/feature-heroes/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'feature-details/:id', component: DetailsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }