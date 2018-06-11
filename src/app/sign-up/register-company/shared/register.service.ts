import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// functions
import { SignUpService } from '../../shared/sign-up-service.class';

@Injectable()
export class RegisterService extends SignUpService {

  addUserUrl = 'companies';
  responseStatus;

  constructor(http: HttpClient) {
    super(http);
  }
}
