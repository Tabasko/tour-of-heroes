import { TestBed } from '@angular/core/testing';

import { GenericFormService } from './generic-form-service';

describe('GenericFormServiceService', () => {
  let service: GenericFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
