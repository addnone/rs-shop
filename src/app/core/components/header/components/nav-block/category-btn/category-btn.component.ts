import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-btn',
  template: `
    <a mat-raised-button [routerLink]="[routeLink]">Каталог товаров</a>
  `,
  styles: [
  ],
})
export class CategoryBtnComponent implements OnInit {

  routeLink = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeTo().subscribe((value) => {
      this.routeLink = value;
    });
  }

  isActive() {
    return this.getCurUrlPath().pipe(
      map((value) => {
        return value === 'categories';
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

  getCurUrlPath() {
    return this.router.events.pipe(
      map((value) => {
        return value;
      }),
      filter(e => e instanceof NavigationEnd),
      map(() => this.route),
      switchMap(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.url;
      }),
      map((value) => {
        return value[0].path;
      }),
    );
  }
}
