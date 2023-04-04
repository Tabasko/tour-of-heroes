import { Component } from '@angular/core';
import { DynamicFormData } from '../dynamic-form/model/dynamic-form.model';
import { Data } from './model/form-data';

@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.css']
})
export class DynamicFormContainerComponent {

  public data : DynamicFormData = Data;

  constructor() { }

}
