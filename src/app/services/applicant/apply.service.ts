import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class ApplyService {

  constructor(private restangular: Restangular) { }

  apply(jobId): Observable<any> {

    const requestData = this.buildRequestData(jobId);
    return this.restangular.all('applicant/apply').post(requestData);
  }

  getAppliedJobs(): Observable<any> {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const token = user.token;

    // -->
    return this.restangular.all('applicant/appliedJobs').getList();
  }

  // todo: move this to its own class
  private buildRequestData(jobId) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    return {
      content: {
        jobId: jobId
      },
      user: user
    };
  }
}
