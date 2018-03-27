import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignUpService } from '../../../shared-d/classes/sign-up-service.class';

@Injectable()
export class RegisterService extends SignUpService {

  addUserUrl = 'candidates';

  constructor(http: HttpClient) {
    super(http);
  }
}
