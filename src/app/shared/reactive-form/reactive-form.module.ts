import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormContainerComponent } from './components/reactive-form-container/reactive-form-container.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';

const MatModules = [
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCommonModule,
];

@NgModule({
  declarations: [
    ReactiveFormContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ...MatModules
  ]
})
export class ReactiveFormModule { }
