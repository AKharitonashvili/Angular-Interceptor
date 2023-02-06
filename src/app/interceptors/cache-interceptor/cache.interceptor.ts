import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { HttpCacheService } from './http-cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private readonly cacheService: HttpCacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    // Ignore Cache
    if (req.headers.get('ignoreCache')) {
      if (this.cacheService.get(req.urlWithParams)) {
        this.cacheService.delete(req.urlWithParams);
      }
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.getFromCache(req.urlWithParams);
    return cachedResponse
      ? cachedResponse instanceof Observable
        ? cachedResponse
        : of(cachedResponse.clone())
      : next.handle(req).pipe(
          tap((event) => {
            if (event instanceof HttpResponse) {
              this.cacheService.addToCache(req.urlWithParams, event);
            }
          })
        );
  }
}
