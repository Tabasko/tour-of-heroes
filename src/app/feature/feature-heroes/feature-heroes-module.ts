import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../../app-routing.module';
import { HeroSearchComponent } from './dashboard/components/hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './service/hero.service';
import { HeroesEffects } from './store/store.effects';
import { HeroesFacade } from './store/store.facade';
import * as fromReducerStore from './store/store.reducer';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(fromReducerStore.storeFeatureKey, fromReducerStore.reducers),
    EffectsModule.forFeature([HeroesEffects]),
  ],
  providers: [HeroService, HeroesFacade],
})
export class FeatureHeroesModule { }