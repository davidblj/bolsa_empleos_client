import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  baseURL = 'http://localhost:3000';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any> > {
    const newRequest = req.clone({url: `${this.baseURL}/${req.url}`});
    return next.handle(newRequest);
  }

}
