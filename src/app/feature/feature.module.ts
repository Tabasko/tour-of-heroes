import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeroesModule } from './feature-heroes/feature-heroes-module';
import { FeatureDetailsModule } from './feature-details/feature-details.module';
import { FeatureNewWizzardModule } from './feature-new-wizzard/feature-new-wizzard.module';
import { FeatureCssSandboxModule } from './feature-css-sandbox/feature-css-sandbox.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeatureHeroesModule,
    FeatureDetailsModule,
    FeatureNewWizzardModule,
    FeatureCssSandboxModule

  ]
})
export class FeatureModule { }
