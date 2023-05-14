import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-sandbox-container',
  templateUrl: './css-sandbox-container.component.html',
  styleUrls: ['./css-sandbox-container.component.css']
})
export class CssSandboxContainerComponent implements OnInit {

  period=  "15";

  constructor() { }

  ngOnInit(): void {
  }

  updatePeriod() {

  }

}
