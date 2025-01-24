import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class DataCacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, { data: any, timeStamp: number }>();
  private Cache_expiration_time = 3*60*1000;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (request.method !== "GET") {
      return next.handle(request);
    }

    const cacheKey = request.urlWithParams;



    if (this.cache.has(cacheKey)) {
      const cachedData = this.cache.get(cacheKey);
      const currentTime = Date.now();

      if (cachedData && cachedData?.timeStamp && currentTime - cachedData.timeStamp < this.Cache_expiration_time) {
        return of(new HttpResponse({ body: cachedData.data, status: 200 }));
      }
    }

    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.set(cacheKey, { data: event.body, timeStamp: Date.now() });
        }
      })
    );
  }
}
