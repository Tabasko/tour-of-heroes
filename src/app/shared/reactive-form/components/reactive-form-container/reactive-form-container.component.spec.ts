import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormContainerComponent } from './reactive-form-container.component';

describe('ReactiveFormContainerComponent', () => {
  let component: ReactiveFormContainerComponent;
  let fixture: ComponentFixture<ReactiveFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
