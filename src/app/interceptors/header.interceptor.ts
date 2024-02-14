import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const withOutTokenAPICalls = [
  '/login',
  "/forgotpassword"
]
const withToeknAPICalls = [
  '/post',
  '/post-details',
  '/users'
]

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token") || "";
    const url = request.url;
    let headers = {} as any;
    if (withOutTokenAPICalls.some(str => url.includes(str))) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      headers.Authorization = `NA`;
    }
    const reqCopy = request.clone({
      setHeaders: headers
    });

    return next.handle(reqCopy);
  }
}
