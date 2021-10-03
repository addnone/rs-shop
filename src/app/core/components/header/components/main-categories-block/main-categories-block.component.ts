import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shop/models/category.model';
import { ApiService } from 'src/app/shop/services/api.service';

@Component({
  selector: 'app-main-categories-block',
  templateUrl: './main-categories-block.component.html',
  styleUrls: ['./main-categories-block.component.scss'],
})
export class MainCategoriesBlockComponent implements OnInit  {

  categories: ICategory[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((value) => this.categories = value);
  }
}
