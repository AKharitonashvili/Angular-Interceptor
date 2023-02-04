import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getClone } from './';

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