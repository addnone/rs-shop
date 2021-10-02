import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from 'src/app/user/services/user-api.service';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {

  product?: IProduct;

  mainImageUrl?: string;

  constructor(private route: ActivatedRoute, private api: ApiService, private userApi: UserApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const productId = params.productId;

      if (productId !== undefined) {
        this.updateProduct(productId);
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
    this.userApi.addToFavorites(this.product.id).subscribe(
      () => this.updateProduct(this.product!.id),
    );
  }

  onAddToCart() {
    if (!this.product) return;
    this.userApi.addToCart(this.product.id).subscribe(
      () => this.updateProduct(this.product!.id),
    );
  }
}
