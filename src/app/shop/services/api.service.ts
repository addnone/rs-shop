import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
