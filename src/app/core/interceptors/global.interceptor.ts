import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GobalInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("userToken");
    const baseUrl: string = "https://upskilling-egypt.com:3003/api/v1/";

    let newReq = {};
    if (token !== null) {
      newReq = {
        Authorization: `Bearer ${token}`,
      };
    }

    // Clone the request and append the base URL

    let modifiedRequest = request.clone({
      setHeaders: newReq,
      url: baseUrl + request.url,
    });

    return next.handle(modifiedRequest);
  }
}
