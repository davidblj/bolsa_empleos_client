import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Service } from '../../../shared-d/classes/service.class';

@Injectable()
export class RegisterService extends Service {

  constructor(private http: HttpClient) {
    super();
  }

  addUser(user: User): Observable<any> {

    const formData = this.buildBinaries(user);
    const message = 'Algo malo ha sucedido. Por favor inténtalo de nuevo.';

    return this.http.post('companies', formData)
      .pipe(catchError(this.handleError(message)))
  };

  // use inferred types
  checkExistence(name, value): Observable<boolean> {

    const params = {};
    params[name] = value;
    return this.http.get('search/companies', {params: params})
      .map((user: string) => user.length > 0);
  }

  private buildBinaries(user: User): FormData {

    const form = new FormData();
    const keys = Object.keys(user);

    keys.forEach(key => {

      if (user.hasOwnProperty(key)) {
        form.append(key, user[key]);
      }
    });

    return form;
  }
}
