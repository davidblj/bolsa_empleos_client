import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// functions
import { SignUpService } from '../../../shared-d/classes/sign-up-service.class';

@Injectable()
export class RegisterService extends SignUpService {

  addUserUrl = 'companies';

  constructor(http: HttpClient) {
    super(http);
  }
}
