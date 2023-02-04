import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getClone } from './';

@Injectable()
export class LoginDurationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Login_Duration = sessionStorage.getItem('Login_Duration');

    return Login_Duration
      ? next.handle(getClone(req, 'Custom_Login_Duration', Login_Duration))
      : next.handle(req);
  }
}
