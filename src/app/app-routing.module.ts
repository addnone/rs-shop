import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './shop/pages/categories-page/categories-page.component';
import { MainPageComponent } from './shop/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'products/:categoryId/:subCategoryId', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
