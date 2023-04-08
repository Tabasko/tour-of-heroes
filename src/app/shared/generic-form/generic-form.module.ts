import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCommonModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GenericDetailsFormComponent } from "./components/generic-details-form/generic-details-form.component";
import { GenericEditFormComponent } from "./components/generic-edit-form/generic-edit-form.component";
import { GenericFormService } from "./generic-form-service";

const CustomComponents = [
  GenericDetailsFormComponent,
  GenericEditFormComponent
];

const MatModules = [
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCommonModule,
];

@NgModule({
  declarations: [...CustomComponents],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MatModules
  ],
  exports: [
    ...CustomComponents,
    ...MatModules
  ],
  providers: [
    GenericFormService
  ]
})
export class GenericFormModule { }
