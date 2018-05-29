import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../../shared/interfaces/job.interface';
import { catchError } from 'rxjs/operators';
import { Service } from '../../shared/classes/service.class';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobService extends Service {

  jobDetailsUrl = 'jobs';

  // common error messaging
  message = 'Error extrayendo la información';

  constructor(private http: HttpClient) {
    super();
  }

  getJob(id: string): Observable<Job> {

    const fetchUrl = `${this.jobDetailsUrl}/${id}`;

    return this.http.get<Job>(fetchUrl)
      .pipe(catchError(this.handleError(this.message)));
  }
}
