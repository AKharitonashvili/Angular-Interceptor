import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCacheService {
  private cacheMap = new Map<any, any>(null);

  public getFromCache(urlWithParams: string): HttpResponse<any> | undefined {
    return this.cacheMap.get(urlWithParams)
      ? this.cacheMap.get(urlWithParams).response
      : undefined;
  }

  public addToCache(urlWithParams: string, response: HttpResponse<any>): void {
    const url = urlWithParams;
    const entry = { url, response, addedTime: Date.now() };
    this.cacheMap.set(url, entry);
  }

  public get(urlWithParams: string): any {
    return this.cacheMap.get(urlWithParams);
  }

  public delete(urlWithParams: string): void {
    this.cacheMap.delete(urlWithParams);
  }
}
