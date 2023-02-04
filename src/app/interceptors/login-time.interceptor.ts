import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getClone } from './';

@Injectable()
export class LoginTimeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Login_Time = sessionStorage.getItem('Login_Time');

    return Login_Time
      ? next.handle(getClone(req, 'Custom_Login_Time', Login_Time))
      : next.handle(req);
  }
}
