import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

// todo: abstract out "handleError"

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {

    const formData = this.buildBinaries(user);
    return this.http.post('companies', formData)
      .pipe(catchError(this.handleError))
  };

  checkExistence(name, value): Observable<boolean> {

    const params = {};
    params[name] = value;
    return this.http.get('search/companies', {params: params})
      .map((user: string) => user.length > 0);
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return new ErrorObservable('Algo malo ha sucedido. Por favor inténtalo de nuevo.');
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
