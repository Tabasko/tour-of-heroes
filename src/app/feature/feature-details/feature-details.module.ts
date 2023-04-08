import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsContainerComponent } from './components/details-container/details-container.component';
import { GenericFormModule } from 'src/app/shared/generic-form/generic-form.module';



@NgModule({
  declarations: [
    DetailsContainerComponent
  ],
  imports: [
    CommonModule,
    GenericFormModule
  ]
})
export class FeatureDetailsModule { }
