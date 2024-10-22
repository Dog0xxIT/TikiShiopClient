import { Logger } from '../logger/logger';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    Logger.log('Outgoing HTTP request', req);
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        Logger.log('Incoming HTTP response', event);
      })
    );
  }
}