import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Token_ID = sessionStorage.getItem('Token_ID');

    return Token_ID
      ? next.handle(getClone(req, 'Custom_Authorization-Token-ID', Token_ID))
      : next.handle(req);
  }
}

@Injectable()
export class JsessionIdInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const JSESSION_ID = sessionStorage.getItem('JSESSION_ID');

    return JSESSION_ID
      ? next.handle(getClone(req, 'Custom_JSESSION_ID', JSESSION_ID))
      : next.handle(req);
  }
}

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

function getClone(req: HttpRequest<any>, name: string, value: string) {
  return req.clone({
    headers: req.headers.set(name, value),
  });
}
