export interface IUserLogin {
  login: string,
  password: string,
}

export interface ITokenResponse {
  token: string,
}

export interface IUserInfo {
  firstName: string,
  lastName: string,
  cart: string[],
  favorites: string[],
  orders: IUserOrder[],
}

export interface IUserOrder {
  items: IOrderItem[],
  details: IOrderDetails,
  id: string,
}

export interface IOrderDetails {
  name:string,
  address: string,
  phone:	string,
  timeToDeliver: string,
  comment: string,
}

export interface IOrderItem {
  id: string,
  amoun: number,
}

export interface IUserRegister {
  firstName: string,
  lastName: string,
  login: string,
  password: string,
}

export interface IIdRequest {
  id: string,
}

export interface IUserOrderRequest {
  items: IOrderItem[],
  details: IOrderDetails,
}

export interface IUserOrderModify {
  id: string,
  details: IOrderDetails,
}
