import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userIsLogged = this.authService.getUser();

    if (userIsLogged) {

      const authToken = this.authService.getUser().token;
      const authRequest = req.clone({setHeaders: { Authorization: `Bearer ${authToken}`}});
      return next.handle(authRequest);

    } else {

      return next.handle(req);
    }
  }
}
