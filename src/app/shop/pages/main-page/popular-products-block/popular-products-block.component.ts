import { Component } from '@angular/core';
import { ApiService } from 'src/app/shop/services/api.service';

@Component({
  selector: 'app-popular-products-block',
  templateUrl: './popular-products-block.component.html',
  styleUrls: ['./popular-products-block.component.scss'],
})
export class PopularProductsBlockComponent  {

  productIdChunks = [
    [
      '612e05c57e5cfaba3c14ed5c',
      '612fcd83023a93dd7a6a21a6',
      '612fcd830167df6c40f34803',
      '612e05c5f00b2207b3dfba3b',
      '612fcd83af4ce4f1d502601d',
      '612e05c57e5cfaba3c14ed5c',
    ],
    [
      '612e05c57e5cfaba3c14ed5c',
      '612fcd83023a93dd7a6a21a6',
      '612fcd830167df6c40f34803',
      '612e05c5f00b2207b3dfba3b',
      '612fcd83af4ce4f1d502601d',
      '612e05c57e5cfaba3c14ed5c',
    ],
  ];

  constructor(public api: ApiService) { }

  getProduct(id: string) {
    return this.api.getProduct(id);
  }
}
