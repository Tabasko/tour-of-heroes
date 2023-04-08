import { Component, OnInit } from '@angular/core';
import { GenericFormData } from 'src/app/shared/generic-form/components/model/generic-form.model';
import { DummyData } from '../../model/dummy-data';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.css']
})
export class DetailsContainerComponent implements OnInit {

  public data: GenericFormData = DummyData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    
  }

}
