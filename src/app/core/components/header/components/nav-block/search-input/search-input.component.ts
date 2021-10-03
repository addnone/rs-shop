import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IProduct } from 'src/app/shop/models/product.model';
import { ApiService } from 'src/app/shop/services/api.service';

const USER_TYPING_WAITING = 1000;
const MIN_LETTER_COUNT_FOR_SEARCH = 3;

@Component({
  selector: 'app-search-input',
  template: `
  <mat-accordion>
    <mat-expansion-panel hideToggle disabled [expanded]="expandResults((productList$ | async))">
      <mat-expansion-panel-header>
        <mat-form-field class="search-input" appearance="fill">
          <mat-label>
            <mat-icon matPrefix>search</mat-icon>
            Поиск товаров
          </mat-label>
          <input matInput type="text"
            [ngModel]="searchText$ | async"
            (ngModelChange)="searchText$.next($event)"
          >
          <button *ngIf="searchText$.value" matSuffix mat-icon-button aria-label="Clear" (click)="searchText$.next('')">
            <mat-icon>close</mat-icon>
          </button>
        </mat-form-field>
      </mat-expansion-panel-header>
      <mat-list>
        <a class="product-link" *ngFor="let product of (productList$ | async)" [routerLink]="[('/product/'+product.id)]" (click)="searchText$.next('')">
          <mat-divider></mat-divider>
              <mat-list-item class="product-item">
                <div class="product-image" [style.backgroundImage]="'url( '+product.imageUrls[0]+' )'">
                </div>
                <div class="product-info">
                  <div class="product-name">{{product.name}}</div>
                  <div class="product-price">цена: {{product.price}}</div>
                </div>
              </mat-list-item>
        </a>
      </mat-list>
    </mat-expansion-panel>
  </mat-accordion>
  `,
  styles: [
    `
    :host {
      z-index: 99;
      width: 450px;
      align-self: flex-start;
    }
    ::ng-deep .search-input {
      padding: 0;
      width: 100%;
      border-radius: 30px;
      align-self: flex-start;
    }
    ::ng-deep .mat-form-field-wrapper{
      margin-bottom: -1.25em;
      border-radius: 30px;
      bacground-color: white;
    }
    .product-link {
      text-decoration: none;
    }
    ::ng-deep .mat-list-item-content {
      padding: 10px 0!important;
    }
    ::ng-deep .product-item {
      display: flex;
      height: 90px!important;
    }
    .product-image {
      display: flex;
      height: 100%;
      width: 70px!important;
      background-size:contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .product-info {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      margin-left: 20px;
    }
    .product-name {
      font-size: 12px;
    }
    .product-price {
      font-size: 10px;
    }
  `,
  ],
})
export class SearchInputComponent  {

  public searchText$ = new BehaviorSubject<string>('');

  public productList$: Observable<IProduct[]> = this.searchText$.pipe(
    debounceTime(USER_TYPING_WAITING),
    distinctUntilChanged(),
    switchMap((data) => {
      if (data.length > MIN_LETTER_COUNT_FOR_SEARCH) {
        return this.api.searchProducts(data);
      }
      return new BehaviorSubject<IProduct[]>([]);
    }),
  );

  public expandResults(list: IProduct[] | null) {
    return list !== null && list.length > 0;
  }

  constructor(private api: ApiService) { }



}
