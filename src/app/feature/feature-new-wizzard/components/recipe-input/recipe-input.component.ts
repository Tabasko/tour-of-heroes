import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-recipe-input",
  templateUrl: "./recipe-input.component.html",
  styleUrls: ["./recipe-input.component.css"],
})
export class RecipeInputComponent {
  recipeControl = new FormControl("");
  recipe?: string;
  recipeList: string[] = [
    "Recipe-1",
    "Recipe-2",
    "Recipe-3",
  ];
}
