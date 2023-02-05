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
    // Don't cache if it's not a GET request
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    //FIXME this
    // delete cache if no header is set by service's method
    // if (!req.headers.get('ignoreCache')) {
    //   if (this.cacheService.get(req.urlWithParams)) {
    //     this.cacheService.delete(req.urlWithParams);
    //   }
    //   return next.handle(req);
    // }

    // Checked if there is cached data for this URI
    const cachedResponse = this.cacheService.getFromCache(req);
    if (cachedResponse) {
      // In case of parallel requests to same URI,
      // return the request already in progress
      // otherwise return the last cached data
      return cachedResponse instanceof Observable
        ? cachedResponse
        : of(cachedResponse.clone());
    }

    // If the request of going through for first time
    // then let the request proceed and cache the response
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cacheService.addToCache(req, event);
        }
      })
    );
  }
}
