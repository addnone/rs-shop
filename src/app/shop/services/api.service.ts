import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { ICategory } from '../models/category.model';
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

  getCategories() {
    const url = 'api/categories';

    return this.http.get<ICategory[]>(url);
  }

  getProductsByCategoryAndSubCategory(categoryId: string, subcategory: string, page?: number, count?: number, sortBy?: string, reverse?: boolean) {

    const baseUrl = `api/goods/category/${categoryId}/${subcategory}`;
    let params = new HttpParams();
    if (page !== undefined) params = params.set('start', page);
    if (count !== undefined) params = params.set('count', count);
    if (sortBy !== undefined) params = params.set('sortBy', sortBy);
    if (reverse !== undefined) params = params.set('reverse', reverse);

    const url = baseUrl;
    // console.log(url);
    return this.http.get<IProduct[]>(url, { params });
  }
}
