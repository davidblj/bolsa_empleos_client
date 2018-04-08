import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpErrorResponse } from '@angular/common/http';

export class Service {

  handleError(message: string) {

    return (error: HttpErrorResponse): ErrorObservable => {

      if (error.error instanceof ErrorEvent) {

        console.error('An error occurred:', error.error.message);
      } else {

        console.error(
          `Backend returned an error with code ${error.status} \n` +
          `And its body was: ${JSON.stringify(error.error)}`);
      }

      return new ErrorObservable(message);
    }
  }

}
