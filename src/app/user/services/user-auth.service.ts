import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUserLogin } from '../models/user.model';
import { UserApiService } from './user-api.service';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

  tokenName = 'userToken';

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private api: UserApiService, private userInfoService: UserInfoService) { }

  private hasToken() : boolean {
    return !!localStorage.getItem(this.tokenName);
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  login(data: IUserLogin) {

    return this.api.login(data).pipe(
      tap((tokenResponse) => {
        console.log('in login');
        localStorage.setItem(this.tokenName, tokenResponse.token);
        this.userInfoService.updateData();
        this.isLoginSubject.next(true);
      }),
    );
  }

  logout() {
    localStorage.removeItem(this.tokenName);
    this.userInfoService.data = undefined;
    this.isLoginSubject.next(false);
  }
}
