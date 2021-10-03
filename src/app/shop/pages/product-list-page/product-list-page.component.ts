import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserInfoService } from 'src/app/user/services/user-info.service';
import { ProductFieldEnum } from '../../enums/product-field.enum';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

const COUNT_PER_PAGE = 8;

@Component({
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
})
export class ProductListPageComponent implements OnInit {

  products$: Observable<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  products: IProduct[] = [];

  curPage = 0;

  sortBy?: ProductFieldEnum;

  reverse?: boolean;

  constructor(private api: ApiService, private route: ActivatedRoute, private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.setProducts();
    this.userInfoService.updateData();
  }

  callApi() {
    return this.route.url.pipe(
      switchMap((urlSegment) => {
        // console.log(urlSegment[1].path, urlSegment[2].path, this.curPage, COUNT_PER_PAGE, this.sortBy, this.reverse);
        return this.api.getProductsByCategoryAndSubCategory(urlSegment[1].path, urlSegment[2].path, this.curPage, COUNT_PER_PAGE, this.sortBy, this.reverse);
      }),
    );
  }

  // setProducts() {
  //   this.products$ = this.callApi();
  // }

  setProducts() {
    this.callApi().subscribe((value) => {
      this.products = value;
    });
  }

  addProducts() {
    this.curPage += 1;
    this.callApi().subscribe((value) => {
      this.products = this.products.concat(value);
    })
  }

  // changePage(diff: number) {
  //   this.curPage += diff;
  //   this.setProducts();
  // }

  // setSortBy(value: ProductFieldEnum) {
  //   this.sortBy = value;
  //   this.setProducts();
  // }

  // setReverse(value?: boolean) {
  //   this.reverse = value;
  //   this.setProducts();
  // }

}
