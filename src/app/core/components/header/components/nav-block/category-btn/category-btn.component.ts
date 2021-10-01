import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category-btn',
  template: `
    <a mat-raised-button [routerLink]="[routeTo() | async]">Каталог товаров</a>
  `,
  styles: [
  ],
})
export class CategoryBtnComponent  {

  constructor(private route: ActivatedRoute) { }

  isActive() {
    return this.route.url.pipe(
      map((value) => {
        return value[0]?.path === 'categories';
      }),
    );
  }

  routeTo() {
    return this.isActive().pipe(
      map((value) => {
        return value ? '' : '/categories';
      }),
    );
  }
}
