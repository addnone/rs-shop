import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PopularProductsBlockComponent } from './pages/main-page/popular-products-block/popular-products-block.component';
import { MainSliderBlockComponent } from './pages/main-page/main-slider-block/main-slider-block.component';
import { PoopularProductsSlideComponent } from './pages/main-page/popular-products-block/popular-products-slide/poopular-products-slide.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductListItemComponent } from './pages/product-list-page/product-list-item/product-list-item.component';
import { CommonHeaderFooterLayontComponent } from './layonts/common-header-footer-layont/common-header-footer-layont.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MainSliderBlockComponent,
    PopularProductsBlockComponent,
    PoopularProductsSlideComponent,
    CategoriesPageComponent,
    ProductListPageComponent,
    ProductListItemComponent,
    CommonHeaderFooterLayontComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],
})
export class ShopModule { }
