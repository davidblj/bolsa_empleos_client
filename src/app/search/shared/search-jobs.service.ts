import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map'

// services
import { Service } from '../../shared/classes/service.class';

// interfaces
import { Job } from '../../shared/interfaces/job.interface';
import { JobSearch } from './job-search-interface';

@Injectable()
export class SearchJobsService extends Service {

  // base urls
  searchJobsUrl = 'search/jobs';
  jobDetailsUrl = 'jobs';

  // common error messaging
  message = 'Error extrayendo la información';

  // pagination variables
  total_count;

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(currentId: string | null, offset: number | null, pageSize: number | null): Observable<JobSearch> {

    const params = this.buildParams(currentId, offset, pageSize);

    return this.http.get<JobSearch>(this.searchJobsUrl, {params: params})
      .do(jobSearch => {
        this.total_count = jobSearch.total_count;
      })
      .pipe(catchError(this.handleError(this.message)));
  }

  getJob(id: string): Observable<Job> {

    const fetchUrl = `${this.jobDetailsUrl}/${id}`;

    return this.http.get<Job>(fetchUrl)
      .pipe(catchError(this.handleError(this.message)));
  }

  // utils

  private buildParams(currentId: string, offset: number, pageSize: number): HttpParams {

    let params = new HttpParams().set('size', pageSize.toString());

    if (currentId) {
      params = params.set('id', currentId);
    }

    if (offset) {
      params = params.set('offset', offset.toString());
    }

    return params;
  }
}
