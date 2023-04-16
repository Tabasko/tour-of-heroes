import { Component, KeyValueDiffers } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-new-wizzard-container",
  templateUrl: "./new-wizzard-container.component.html",
  styleUrls: ["./new-wizzard-container.component.css"],
})
export class NewWizzardContainerComponent {
  machineFormGroup = this.fb.group({
    machine: ["", {}],
  });
  recipeFormGroup = this.fb.group({
    secondCtrl: ["", Validators.required],
  });

  finalizeFormGroup = this.fb.group(
    { ok: ["", Validators.required] },
  );
  constructor(private fb: FormBuilder) { }
}
