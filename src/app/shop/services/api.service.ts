import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, zip } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'localhost:3004';

  constructor(private http: HttpClient) { }

  searchProducts(text: string): Observable<IProduct[]> {

    const params = {
      text,
    };

    const url = 'api/goods/search';

    const resonse = this.http.get<IProduct[]>(url, { params });

    return resonse;
  }

  getProduct(productId: string) {

    const url = `api/goods/item/${productId}`;

    const response = this.http.get<IProduct>(url);

    return response;
  }

  getProductList(productIds: string[]) {

    const products$: Observable<IProduct>[] = [];

    productIds.forEach(element => {
      products$.push(this.getProduct(element));
    });

    return zip(...products$);
  }
}
