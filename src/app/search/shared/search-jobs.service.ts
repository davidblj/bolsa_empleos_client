import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map'

// services
import { Service } from '../../shared/classes/service.class';

// classes
import { JobSnippet } from './job-snippet.class';
import { Job } from './job.class';

@Injectable()
export class SearchJobsService extends Service {

  searchJobsUrl = 'search/jobs';
  jobDetailsUrl = 'jobs';
  message = 'Error extrayendo la información';

  constructor(private http: HttpClient) {
    super();
  }

  fetchJobs(id: string | null, page: number | null): Observable<JobSnippet[]> {

    return this.http.get(this.searchJobsUrl)
      .map((response: any) => {
        return this.mapJobs(response);
      })
      .pipe(catchError(this.handleError(this.message)));
  }

  fetchJob(id: string): Observable<Job> {

    const fetchUrl = `${this.jobDetailsUrl}/${id}`;
    return this.http.get(fetchUrl)
      .map((response: any) => {
        return this.mapJob(response);
      })
      .pipe(catchError(this.handleError(this.message)));
  }

  mapJobs(response: any): JobSnippet[] {

    return response.map((item) => {

      return new JobSnippet(item);
    });
  }

  mapJob(response: any): Job {

    return new Job(response);
  }
}
