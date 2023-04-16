import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWizzardContainerComponent } from './new-wizzard-container.component';

describe('NewWizzardContainerComponent', () => {
  let component: NewWizzardContainerComponent;
  let fixture: ComponentFixture<NewWizzardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWizzardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWizzardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
