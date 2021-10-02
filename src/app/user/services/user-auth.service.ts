import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserLogin } from '../models/user.model';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {

  tokenName = 'userToken';

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private api: UserApiService) { }

  private hasToken() : boolean {
    return !!localStorage.getItem(this.tokenName);
  }

  getToken() {
    return localStorage.getItem(this.tokenName);
  }

  login(data: IUserLogin) {
    this.api.login(data).subscribe((response) => {
      localStorage.setItem(this.tokenName, response.token);
    });
  }

  logout() {
    localStorage.removeItem(this.tokenName);
    this.isLoginSubject.next(false);
  }
}
