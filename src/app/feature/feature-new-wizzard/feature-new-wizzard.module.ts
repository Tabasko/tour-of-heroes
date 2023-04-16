import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "src/app/shared/material-module/material-module.module";
import { NewWizzardContainerComponent } from "./components/new-wizzard-container/new-wizzard-container.component";

const customComponents = [
  NewWizzardContainerComponent,
];

@NgModule({
  declarations: [
    ...customComponents,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    NewWizzardContainerComponent,
    MaterialModule,
  ],
})
export class FeatureNewWizzardModule {}
