import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICategory } from '../../models/category.model';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {

  categories$: Observable<ICategory[]> = new BehaviorSubject<ICategory[]>([]);

  curCategory?: ICategory;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories$ = this.api.getCategories();

    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams.categoryId) {
        this.getCategory(queryParams.categoryId).subscribe((category) => this.curCategory = category);
      }
    });
  }

  getSubcategories(categoryId: string) {
    return this.categories$.pipe(
      map((categories) => categories.filter((value) => value.id === categoryId)[0].subCategories),
    );
  }

  getCategory(categoryId: string) {
    return this.categories$.pipe(
      map((categories) => categories.filter((value) => value.id === categoryId)[0]),
    );
  }

  setCurCategory(category: ICategory) {
    this.curCategory = category;
  }

  createProductsLink(categoryId: string, subCategoryId: string) {
    return `/products/${categoryId}/${subCategoryId}`;
  }

}
