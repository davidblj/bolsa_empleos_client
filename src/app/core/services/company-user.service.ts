import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../shared/classes/service.class';

// interfaces
import { Job } from '../../shared/interfaces/job.interface';
import { catchError } from 'rxjs/operators';
import { JobCandidates } from '../../company-dashboard/employment/shared/job-candidate.interface';

@Injectable()
export class CompanyUserService extends Service {

  baseUrl = 'company';

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(): Observable<Job[]> {

    const message = 'Error. No pudimos extraer la información asociada a tu sesion';
    const params = this.buildParams();

    return this.http.get<Job[]>(`${this.baseUrl}/jobs`, { params: params})
      .pipe(catchError(this.handleError(message)));
  }

  getJob(id: string): Observable<JobCandidates> {

    return this.http.get<JobCandidates>(`${this.baseUrl}/jobs/${id}`);
  }

  private buildParams(): HttpParams {

    const size = '10';

    let params = new HttpParams().set('size', size);
    return params;
  }
}
