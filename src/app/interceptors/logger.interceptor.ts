import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("this logger:", request.url)
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          console.log("this logger: resposer:", event)
        },
        // Operation failed; error is an HttpErrorResponse
        error: (_error) => {
          console.log("this logger: Error:", _error)
        }
      }))
  }
}
