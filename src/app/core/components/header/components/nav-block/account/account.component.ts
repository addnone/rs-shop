import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { IUserInfo } from 'src/app/user/models/user.model';
import { UserApiService } from 'src/app/user/services/user-api.service';
import { UserAuthService } from 'src/app/user/services/user-auth.service';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  userInfo?: IUserInfo;

  constructor(private userAuthService: UserAuthService, private userApiService: UserApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userAuthService.isLoginSubject.subscribe((isLogin) => {
      if (isLogin) this.userApiService.userInfo().subscribe((userInfo) => {
        this.userInfo = userInfo;
      });
    });
  }

  isLogin() {
    return this.userAuthService.isLoginSubject.asObservable();
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent);
  }

  onLogout() {
    this.userAuthService.logout();
    this.userInfo = undefined;
  }
}
