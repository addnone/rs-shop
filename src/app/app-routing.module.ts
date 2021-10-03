import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHeaderFooterLayontComponent } from './shop/layonts/common-header-footer-layont/common-header-footer-layont.component';
import { CategoriesPageComponent } from './shop/pages/categories-page/categories-page.component';
import { MainPageComponent } from './shop/pages/main-page/main-page.component';
import { ProductDetailPageComponent } from './shop/pages/product-detail-page/product-detail-page.component';
import { ProductListPageComponent } from './shop/pages/product-list-page/product-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '', component: CommonHeaderFooterLayontComponent, children: [
    { path: 'main', component: MainPageComponent },
    { path: 'categories', component: CategoriesPageComponent },
    { path: 'products/:categoryId/:subCategoryId', component: ProductListPageComponent },
    { path: 'product/:productId', component: ProductDetailPageComponent },
  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
