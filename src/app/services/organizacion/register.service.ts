import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Data } from '../../pages/company-page/register/data';
import { ResponseMessage } from '../../shared/ResponseMessage';

@Injectable()
export class RegisterService {

  constructor(private restangular: Restangular) { }

  // todo: use a model
  submitUser(user: Data): Observable<ResponseMessage>  {

    return this.restangular.all('company/registrar').post(user);
  }
}
