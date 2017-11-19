import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class RegisterApplicantService {

  constructor(private restangular: Restangular) { }

  // todo: use a model
  submitUser(user): Observable<string> {

    return this.restangular.all('applicant/applicantRegistration').post(user);
  }
}
