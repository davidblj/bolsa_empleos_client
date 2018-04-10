import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

// classes
import { Service } from './service.class';

// functions
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from './user.class';

// class inheritance with dependency injection
// https://stackoverflow.com/questions/33970645/how-to-extend-a-component-with-dependency-injection-in-angular-2

@Injectable()
export class SignUpService extends Service {

  addUserUrl;

  constructor(private http: HttpClient) {
    super();
  }

  addUser(user: User): Observable<any> {

    const formData = this.buildBinaries(user);
    const message = 'Algo terriblemente mal ha sucedido. ¡ Inténtemoslo de nuevo !';

    return this.http.post(this.addUserUrl, formData)
      .pipe(catchError(this.handleError(message)))
  };

  // use type inferring
  checkExistence(name, value): Observable<boolean> {

    const params = {};
    params[name] = value;

    return this.http.get('sign-up-check', {params: params})
      .map((user: any) => !!user._id);
  }

  buildBinaries(user: User): FormData {

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
