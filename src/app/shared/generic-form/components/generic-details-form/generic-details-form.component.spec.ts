import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDetailsFormComponent } from './generic-details-form.component';

describe('GenericDetailsFormComponent', () => {
  let component: GenericDetailsFormComponent;
  let fixture: ComponentFixture<GenericDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
