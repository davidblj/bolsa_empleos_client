import { Injectable } from '@angular/core';
import { Restangular} from 'ngx-restangular';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class ApplyService {

  tempAppliedJobs: string[] = [];

  constructor(private restangular: Restangular) { }

  apply(jobId): Observable<any> {

    const requestData = this.buildRequestData(jobId);
    return this.restangular.all('applicant/apply').post(requestData);
  }

  // todo: move the token logic to global shared module
  getAppliedJobs(): Observable<any> {

    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    return this.restangular.one('applicant/getAppliedJobs').get({}, {'x-access-token': token});
  }

  public saveAppliedJob(jobId) {
    this.tempAppliedJobs.push(jobId);
  }

  public isApplying(jobId): Boolean {
    return this.tempAppliedJobs.includes(jobId);
  }

  // todo: move the token logic to global shared module
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
