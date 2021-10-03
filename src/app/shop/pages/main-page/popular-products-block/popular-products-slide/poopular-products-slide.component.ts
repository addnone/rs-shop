import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shop/services/api.service';

@Component({
  selector: 'app-poopular-products-slide',
  templateUrl: './poopular-products-slide.component.html',
  styleUrls: ['./poopular-products-slide.component.scss'],
})
export class PoopularProductsSlideComponent implements OnInit {

  @Input() productIds: string[] = [];

  products$ = this.api.getProductList(this.productIds);

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.products$ = this.api.getProductList(this.productIds);
  }

}
