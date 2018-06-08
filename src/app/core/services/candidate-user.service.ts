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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Candidate } from '../../shared/interfaces/candidate.interface';
import { UserDetails } from '../../candidate-dashboard/profile/shared/user-details.interface';
import { Form } from '../../shared/classes/form.class';
import { Job } from '../../shared/interfaces/job.interface';
import { UserAuth } from '../../log-in/shared/user-auth.interface';

@Injectable()
export class CandidateUserService extends Service {

  baseUrl = 'candidate';
  publicUrl = 'candidates';

  private appliedJobsSource = new BehaviorSubject<JobSnippet[]>([]);
  appliedJobs$ = this.appliedJobsSource.asObservable();

  constructor(private http: HttpClient,
              private authService: AuthService) {
    super();
  }

  addJob(job: Job): Observable<boolean> {

    const userCanApply = (this.serviceGuard() &&
                         this.addJobGuard(job.to));

    if (userCanApply) {

      const message = 'Operacion invalida. Verifica que ya no estés aplicando o que la oferta exista';

      return this.http.post(`${this.baseUrl}/jobs/${job._id}`, null, { observe: 'response' })
        .map((res: HttpResponse<any>) => res.status === 204)
        .pipe(catchError(this.handleError(message)));

    } else {

      return this.rejectRequest();
    }
  }

  deleteJob(id: string): Observable<any> | null {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged) {

      const message = 'Operacion invalida. Verifica si estas aplicando o que la oferta exista';

      return this.http.delete(`${this.baseUrl}/jobs/${id}`)
        .pipe(catchError(this.handleError(message)));
    }

    return null;
  }

  getJobs(): Observable<any> {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged) {

      const message = 'Error. No pudimos extraer la información asociada a tu sesion';

      return this.http.get<JobSnippet[]>(`${this.baseUrl}/jobs/`)
        .pipe(catchError(this.handleError(message)))
        .do((jobs: JobSnippet[]) => {
            this.appliedJobsSource.next(jobs);
            return jobs;
          });

    } else {

      return this.forwardRequest();
    }
  }

  getProfile(): Observable<Candidate> | null {

    const userIsLogged = this.serviceGuard();

    if (userIsLogged) {
      const id = this.authService.getUser()._id;
      return this.http.get<Candidate>(`${this.publicUrl}/${id}`);
    }

    return null;
  }

  updateProfile(userDetails: UserDetails): Observable<any> | null {

    const userIsLogged = this.serviceGuard();
    if (userIsLogged) {

      const message = 'Error. Tu perfil no se pudo actualizar';
      const form = new Form();
      const formData = form.buildBinaries<UserDetails>(userDetails);

      return this.http.put(`${this.baseUrl}`, formData)
        .pipe(catchError(this.handleError(message)));
    }

    return null;
  }

  // utils

  addJobLocally(newJob: JobSnippet) {

    const oldList: JobSnippet[] = this.appliedJobsSource.value;
    this.appliedJobsSource.next([...oldList, newJob]);
  }

  private serviceGuard(): boolean {

    const userInfo = this.authService.getUser();
    const userIsLogged =
      (userInfo &&
      (userInfo.role === 'Estudiante' || userInfo.role === 'Egresado'));

    return userIsLogged;
  }

  private addJobGuard(audience: string): boolean {

    const user = this.authService.getUser();
    const userRole = user.role;

    if (audience === 'Ambos') {
      return true
    }

    if (audience === 'Practicante' && userRole === 'Estudiante') {
      return true
    }

    return audience === 'Egresado' && userRole === 'Egresado';
  }

  private forwardRequest(): Observable<any> {

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
