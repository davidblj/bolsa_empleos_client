import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class JobService {

  constructor(private restangular: Restangular) { }

  getJobDetails(jobId): Observable<any> {

    const user = localStorage.getItem('currentUser');
    const token = JSON.parse(user).token;

    // todo: set user token on this http header
    return this.restangular.one('company/getJobDetails').get({jobId: jobId}, {'x-access-token': token});
  }
}
