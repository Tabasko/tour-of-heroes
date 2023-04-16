import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-machine-input",
  templateUrl: "./machine-input.component.html",
  styleUrls: ["./machine-input.component.css"],
})
export class MachineInputComponent {
  machineControl = new FormControl("");

  machine? : string;
  
  machineList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato",
  ];
}
