import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineInputComponent } from './machine-input.component';

describe('MachineInputComponent', () => {
  let component: MachineInputComponent;
  let fixture: ComponentFixture<MachineInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
