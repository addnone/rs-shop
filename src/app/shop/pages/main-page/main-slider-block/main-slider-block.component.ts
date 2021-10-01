import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shop/services/api.service';

@Component({
  selector: 'app-main-slider-block',
  templateUrl: './main-slider-block.component.html',
  styleUrls: ['./main-slider-block.component.scss'],
})
export class MainSliderBlockComponent implements OnInit {

  productIds = [
    '612e05c57e5cfaba3c14ed5c',
    '612fcd83023a93dd7a6a21a6',
    '612fcd830167df6c40f34803',
    '612e05c5f00b2207b3dfba3b',
    '612fcd83af4ce4f1d502601d',
  ];

  products$ = this.api.getProductList(this.productIds);

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

}
