import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Job } from '../../../shared/interfaces/job.interface';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../../../core/services/job.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmploymentJobOfferResolverService implements Resolve<Job> {

  constructor(private jobService: JobService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get('job');

    return this.jobService.getJob(id)
      .pipe(catchError(() => {

        this.router.navigate(['/ofertas', 'empresas']);
        return Observable.create(function (observer) {
            observer.next(null);
          });
        })
      );
  }

}
