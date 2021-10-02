import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITokenResponse, IUserInfo, IUserLogin, IUserOrder, IUserOrderModify, IUserRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  login(data: IUserLogin) {
    return this.http.post<ITokenResponse>('api/users/login', data);
  }

  userInfo() {
    return this.http.get<IUserInfo>('api/users/userInfo');
  }

  register(data: IUserRegister) {
    return this.http.post<ITokenResponse>('api/users/register', data);
  }

  addToFavorites(id: string) {
    return this.http.post('api/users/favorites', { id });
  }

  deleteFromFavorites(id: string) {
    return this.http.delete(`api/users/favorites?id=${id}`);
  }

  addToCart(id: string) {
    return this.http.post('api/users/cart', { id });
  }

  deleteFromCart(id: string) {
    return this.http.delete(`api/users/cart?id=${id}`);
  }

  submitOrder(data: IUserOrder) {
    return this.http.post('api/users/order', data);
  }

  editOrder(data: IUserOrderModify) {
    return this.http.put('api/users/order', data);
  }

  deleteOrder(id: string) {
    return this.http.delete(`api/users/order?id=${id}`);
  }
}
