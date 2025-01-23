import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { Loader3Service } from '../service/loader3.service';

@Injectable()
export class loaderInterceptor implements HttpInterceptor {

  constructor(private _loader: Loader3Service) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loader.show();

    return next.handle(req).pipe(
      finalize(() => this._loader.hide())
    )
  }
}
