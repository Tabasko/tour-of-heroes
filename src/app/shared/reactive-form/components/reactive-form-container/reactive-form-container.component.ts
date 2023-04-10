import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-container',
  templateUrl: './reactive-form-container.component.html',
  styleUrls: ['./reactive-form-container.component.css']
})
export class ReactiveFormContainerComponent {

  public form = this.fb.group({
    userName: [Validators.required, Validators.minLength(5)],
    password: [Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.log('klick');

  }
}
