import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/user/services/user-api.service';
import { UserInfoService } from 'src/app/user/services/user-info.service';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {

  product?: IProduct;

  mainImageUrl?: string;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private userApi: UserApiService,
    public userInfoService: UserInfoService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const productId = params.productId;

      if (productId !== undefined) {
        this.updateProduct(productId);
        this.userInfoService.updateData();
      }
    });
  }

  updateProduct(productId: string) {
    this.api.getProduct(productId).subscribe((value) => {
      this.product = value;
      this.mainImageUrl = this.product.imageUrls[0];
    });
  }

  changeMainImageUrl(newUrl: string) {
    this.mainImageUrl = newUrl;
  }

  onAddToFavorites() {
    if (!this.product) return;
    this.userApi.unauthorizedHandler(this.userApi.addToFavorites(this.product.id)).subscribe();
    this.userInfoService.updateData();
    this.snackBar.open('Товар добавлен в избранное');
  }

  onAddToCart() {
    if (!this.product) return;
    this.userApi.unauthorizedHandler(this.userApi.addToCart(this.product.id)).subscribe();
    this.userInfoService.updateData();
    this.snackBar.open('Товар добавлен в корзину');
  }
}
