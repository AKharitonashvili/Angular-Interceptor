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
