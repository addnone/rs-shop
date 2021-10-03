import { Injectable } from '@angular/core';
import { IUserInfo } from '../models/user.model';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {

  data?: IUserInfo;

  constructor(private api: UserApiService) { }

  updateData() {
    this.api.userInfo().subscribe((data) => {
      console.log('udate userInfo', data);
      this.data = data;
    });
  }

  isInFavorites(productId: string) {
    return this.data?.favorites.includes(productId);
  }

  isInCart(productId: string) {
    return this.data?.cart.includes(productId);
  }
}
