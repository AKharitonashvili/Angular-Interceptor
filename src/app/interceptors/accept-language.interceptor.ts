import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getClone } from '.';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Language = sessionStorage.getItem('Language');

    return Language
      ? next.handle(getClone(req, 'Custom_Language', Language))
      : next.handle(req);
  }
}
