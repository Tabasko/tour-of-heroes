import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssSandboxContainerComponent } from './components/css-sandbox-container/css-sandbox-container.component';
import { MaterialModule } from 'src/app/shared/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CssSandboxContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class FeatureCssSandboxModule { }
