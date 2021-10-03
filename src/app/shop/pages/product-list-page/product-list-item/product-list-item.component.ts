import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProduct } from 'src/app/shop/models/product.model';
import { UserApiService } from 'src/app/user/services/user-api.service';
import { UserAuthService } from 'src/app/user/services/user-auth.service';
import { UserInfoService } from 'src/app/user/services/user-info.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {

  @Input() product!: IProduct;

  constructor(
    private userApi: UserApiService,
    public userInfoService: UserInfoService,
    private userAuthService: UserAuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  createProdictDetailsLink() {
    return `/product/${this.product.id}`;
  }

  onAddToCart() {
    if (!this.product) return;
    this.userApi.unauthorizedHandler(this.userApi.addToCart(this.product.id)).subscribe(
      () => {
        this.userInfoService.updateData();
        this.snackBar.open('Товар добавлен в корзину');
      },
    );
  }
}
