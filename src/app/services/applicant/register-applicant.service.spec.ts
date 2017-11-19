import { TestBed, inject } from '@angular/core/testing';

import { RegisterApplicantService } from './register-applicant.service';

describe('RegisterApplicantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterApplicantService]
    });
  });

  it('should be created', inject([RegisterApplicantService], (service: RegisterApplicantService) => {
    expect(service).toBeTruthy();
  }));
});
