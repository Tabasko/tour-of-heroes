import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsContainerComponent } from './components/details-container/details-container.component';
import { GenericFormModule } from 'src/app/shared/generic-form/generic-form.module';
import { GenericDetailsFormComponent } from 'src/app/shared/generic-form/components/generic-details-form/generic-details-form.component';

@NgModule({
  declarations: [
    DetailsContainerComponent
  ],
  imports: [
    CommonModule,
    GenericFormModule
  ],
  exports: [
    GenericFormModule
  ]
})
export class FeatureDetailsModule { }
