import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericEditFormComponent } from './generic-edit-form.component';

describe('GenericEditFormComponent', () => {
  let component: GenericEditFormComponent;
  let fixture: ComponentFixture<GenericEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
