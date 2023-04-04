import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '../app-routing.module';
import { HeroSearchComponent } from './feature-heroes/dashboard/components/hero-search/hero-search.component';
import { DashboardComponent } from './feature-heroes/dashboard/dashboard.component';
import { HeroDetailComponent } from './feature-heroes/detail/hero-detail.component';
import { DynamicFormContainerComponent } from './feature-heroes/dynamic-form-container/dynamic-form-container.component';
import { DynamicFormComponent } from './feature-heroes/dynamic-form/dynamic-form.component';
import { HeroesComponent } from './feature-heroes/heroes/heroes.component';
import { HeroService } from './feature-heroes/service/hero.service';
import { HeroesEffects } from './feature-heroes/store/store.effects';
import { HeroesFacade } from './feature-heroes/store/store.facade';
import * as fromReducerStore from './feature-heroes/store/store.reducer';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    DynamicFormComponent,
    DynamicFormContainerComponent
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
export class FeatureModule { }