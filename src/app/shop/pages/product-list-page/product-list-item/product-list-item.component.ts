import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shop/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  createProdictDetailsLink() {
    return `/product/${this.product.id}`;
  }
}
