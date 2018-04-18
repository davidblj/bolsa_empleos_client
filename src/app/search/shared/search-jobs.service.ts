import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map'

// services
import { Service } from '../../shared/classes/service.class';

// classes
import { JobSnippet } from './job-snippet.interface';
import { Job } from '../../shared/interfaces/job.interface';

@Injectable()
export class SearchJobsService extends Service {

  searchJobsUrl = 'search/jobs';
  jobDetailsUrl = 'jobs';
  message = 'Error extrayendo la información';

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(id: string | null, page: number | null): Observable<JobSnippet[]> {

    return this.http.get<JobSnippet[]>(this.searchJobsUrl)
      .pipe(catchError(this.handleError(this.message)));
  }

  getJob(id: string): Observable<Job> {

    const fetchUrl = `${this.jobDetailsUrl}/${id}`;

    return this.http.get<Job>(fetchUrl)
      .pipe(catchError(this.handleError(this.message)));
  }

}
