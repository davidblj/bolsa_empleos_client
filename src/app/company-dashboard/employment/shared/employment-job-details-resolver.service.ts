import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { CompanyUserService } from '../../../core/services/company-user.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

// interfaces
import { JobCandidates } from './job-candidate.interface';

@Injectable()
export class EmploymentJobDetailsResolver implements Resolve<JobCandidates> {

  constructor(private companyUserService: CompanyUserService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    const id = route.paramMap.get('job');

    return this.companyUserService.getJob(id)
      .pipe(catchError(() => {

        this.router.navigate(['/ofertas', 'empresas']);
        return Observable.create(function(observer) {
          observer.next(null);
        });
      }));
  }
}
