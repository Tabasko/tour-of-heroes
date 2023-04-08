import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeroesModule } from './feature-heroes/feature-heroes-module';
import { FeatureDynamicFormModule } from './feature-dynamic-form/feature-dynamic-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureHeroesModule,
    FeatureDynamicFormModule
  ]
})
export class FeatureModule { }
