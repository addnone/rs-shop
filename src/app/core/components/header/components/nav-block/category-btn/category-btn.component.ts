import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-btn',
  template: `
    <a mat-raised-button (click)="onClick()">Каталог товаров</a>
  `,
  styles: [
  ],
})
export class CategoryBtnComponent  {

  constructor(private route: ActivatedRoute, private router: Router) { }

  onClick() {
    const curRoute = this.route.snapshot.firstChild?.url[0].path;
    const nextRoute = curRoute === 'categories' ? 'main' : 'categories';
    this.router.navigate([nextRoute]);
  }
}
