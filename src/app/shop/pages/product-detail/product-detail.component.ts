import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product?: IProduct;

  mainImageUrl?: string;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.productId;

    if (productId !== undefined) {
      this.api.getProduct(productId).subscribe((value) => {
        this.product = value;
        this.mainImageUrl = this.product.imageUrls[0];
      });
    }
  }

  changeMainImageUrl(newUrl: string) {
    this.mainImageUrl = newUrl;
  }

}
