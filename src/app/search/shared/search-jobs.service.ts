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
import { Query } from './query.interface';

@Injectable()
export class SearchJobsService extends Service {

  // base urls
  searchJobsUrl = 'search/jobs';
  jobDetailsUrl = 'jobs';

  // common error messaging
  message = 'Error extrayendo la información';

  // pagination variables
  params: HttpParams;
  total_count;

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(currentId: string, offset: number, pageSize: number, query: Query): Observable<JobSearch> {

    this.buildParams(currentId, offset, pageSize, query);

    return this.http.get<JobSearch>(this.searchJobsUrl, {params: this.params})
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

  private buildParams(currentId: string, offset: number, pageSize: number, query: Query) {

    if (!this.params) {
      this.params = new HttpParams().set('size', pageSize.toString());
    }

    if (currentId) {
      this.params = this.params.set('id', currentId);
    }

    if (offset) {
      this.params = this.params.set('offset', offset.toString());
    }

    if (query) {

      const isNotEmpty = query.value.length > 0;

      if (isNotEmpty) {

        const queryName = `q[${query.name}]`;
        this.params = this.params.set(queryName, query.value);

      } else {

        const queryName = `q[${query.name}]`;
        this.params = this.params.delete(queryName);
      }
    }
  }
}
