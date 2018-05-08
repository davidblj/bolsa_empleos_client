import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import * as fileSaver from 'file-saver';

// classes
import { Service } from '../../shared/classes/service.class';

// interfaces
import { Job } from '../../shared/interfaces/job.interface';
import { JobCandidates } from '../../company-dashboard/employment/shared/job-candidate.interface';
import { Candidate } from '../../company-dashboard/employment/shared/candidate.interface';

@Injectable()
export class CompanyUserService extends Service {

  baseUrl = 'company';

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(): Observable<Job[]> {

    const message = 'No pudimos extraer la información asociada a tu sesion';
    const params = this.buildParams();

    return this.http.get<Job[]>(`${this.baseUrl}/jobs`, { params: params})
      .pipe(catchError(this.handleError(message)));
  }

  addJob(job: Job): Observable<any> {

    const message = 'Error. La oferta no se ha podido publicar';

    return this.http.post(`${this.baseUrl}/jobs`, job)
      .pipe(catchError(this.handleError(message)));
  }

  checkJobExistence(name, value): Observable<boolean> {

    const params = {};
    params[name] = value;

    return this.http.get<Job>('jobs/check-job', {params: params})
      .map((job: Job) => !!job._id);
  }

  getJob(id: string): Observable<JobCandidates | null> {

    const message = 'No se pudo extraer la información asociada a la oferta seleccionada';

    return this.http.get<JobCandidates>(`${this.baseUrl}/jobs/${id}`)
      .pipe(catchError(this.handleError(message)));
  }

  getCV(candidate: Candidate) {

    const message = 'No se pudo completar la descarga';
    const id = candidate._id;
    const url = `candidates/${id}/file`;

    this.http.get(url, { responseType: 'blob'})
      .pipe(catchError(this.handleError(message)))
      .subscribe((res: Blob) => {
        fileSaver.saveAs(res, this.sanitizeFileName(candidate.name));
      })
  }

  private buildParams(): HttpParams {
    const size = '10';
    let params = new HttpParams().set('size', size);
    return params;
  }

  private sanitizeFileName(username: string) {
    const filename = username.replace(/\s/g, '_');
    return filename.concat('.pdf');
  }
}
