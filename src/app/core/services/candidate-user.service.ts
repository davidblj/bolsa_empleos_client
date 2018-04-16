import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';

// classes
import { Service } from '../../shared/classes/service.class';
import { JobSnippet } from '../../search/shared/job-snippet.interface';

// services
import { AuthService } from './auth.service';

@Injectable()
export class CandidateUserService extends Service {

  baseUrl = 'candidate';
  appliedJobs: JobSnippet[];

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService) {
    super();
  }

  addJob(id: string): Observable<boolean> {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged) {

      const message = 'Operacion invalida. Verifica que ya no estés aplicando o que la oferta exista';

      return this.http.post(`${this.baseUrl}/jobs/${id}`, null, { observe: 'response' })
        .map((res: HttpResponse<any>) => res.status === 204)
        .pipe(catchError(this.handleError(message)));

    } else {

      return this.rejectRequest();
    }
  }

  getJobs(): Observable<any> {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged) {

      const message = 'Error. No pudimos extraer la información asociada a tu sesion';

      return this.http.get<JobSnippet[]>(`${this.baseUrl}/jobs/`)
        .pipe(catchError(this.handleError(message)))
        .do(

          (jobs: JobSnippet[]) => {
            this.appliedJobs = jobs;
          },
          (e_message) => {
            console.error(e_message)
          });

    } else {

      return this.pipe();
    }
  }

  // utils

  getApplyingStatus(id: string): boolean {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged && this.appliedJobs) {

      return this.appliedJobs.some((job: JobSnippet) => {
        return job._id === id;
      });

    } else { return false; }
  }

  private serviceGuard(): boolean {

    const userIsLogged = this.authService.getUser();
    return !!userIsLogged;
  }

  private pipe(): Observable<any> {
    return new Observable(function (observer) {
      observer.next();
    });
  }

  private rejectRequest(): Observable<boolean> {

    return new Observable(function (observer) {
      observer.next(false);
    });
  }
}