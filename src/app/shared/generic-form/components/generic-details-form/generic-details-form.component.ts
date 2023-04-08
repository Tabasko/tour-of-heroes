import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericFormService } from '../../generic-form-service';
import { GenericFormControls, GenericFormData } from '../model/generic-form.model';

@Component({
  selector: 'app-generic-details-form',
  templateUrl: './generic-details-form.component.html',
  styleUrls: ['./generic-details-form.component.css']
})
export class GenericDetailsFormComponent implements OnChanges {

  @Input() data: GenericFormData = { controls: [] };
  public form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private fs: GenericFormService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange) {
      this.fs.createForm(this.form, this.data.controls);
    }
  }


  onSubmit() {
    console.log('Form valid: ', this.form.valid);
    console.log('Form values: ', this.form.value);
  }

}
