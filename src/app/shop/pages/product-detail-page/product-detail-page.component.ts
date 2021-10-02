import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent implements OnInit {

  product?: IProduct;

  mainImageUrl?: string;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const productId = params.productId;

      if (productId !== undefined) {
        this.api.getProduct(productId).subscribe((value) => {
          this.product = value;
          this.mainImageUrl = this.product.imageUrls[0];
        });
      }
    });
  }

  changeMainImageUrl(newUrl: string) {
    this.mainImageUrl = newUrl;
  }

}
