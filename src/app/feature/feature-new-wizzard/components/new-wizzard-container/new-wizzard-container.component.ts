import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { selectionModel } from "../../model/wizzard-selection.model";

@Component({
  selector: "app-new-wizzard-container",
  templateUrl: "./new-wizzard-container.component.html",
  styleUrls: ["./new-wizzard-container.component.css"],
})
export class NewWizzardContainerComponent {
  machineFormGroup = this.fb.group({
    machineControl: ["", Validators.required],
  });
  recipeFormGroup = this.fb.group({
    recipeControl: ["", Validators.required],
  });

  finalizeFormGroup = this.fb.group(
    { ok: ["", {}] },
  );

  machine?: string;
  machineList: string[] = selectionModel.machines;

  recipe?: string;
  recipeList: string[] = selectionModel.recipes;

  template?: string;
  templateList: string[] = selectionModel.templates;

  isDisconti() {
    return this.machine === "Machine 1";
  }

  isConti() {
    return this.machine !== "Machine 1";
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }
}
