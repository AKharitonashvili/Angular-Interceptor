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
    return next.handle(
      getClone(req, 'A_Custom_JSESSION_ID', sessionStorage.getItem('JSESSION_ID'))
    );
  }
}
