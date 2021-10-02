import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor(private userAuthService: UserAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('api/users/') && this.userAuthService.isLoginSubject.value) {
      const updatedRequest = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${this.userAuthService.getToken()}`),
      });
      return next.handle(updatedRequest);
    }
    return next.handle(request);
  }
}
