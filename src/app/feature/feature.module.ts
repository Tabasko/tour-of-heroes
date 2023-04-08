import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeroesModule } from './feature-heroes/feature-heroes-module';
import { FeatureDetailsModule } from './feature-details/feature-details.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureHeroesModule,
    FeatureDetailsModule
    
  ]
})
export class FeatureModule { }
