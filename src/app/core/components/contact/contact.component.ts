import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  @Input() icon: string = '';

  @Input() info: string = '';

  @Input() link: string = '';

  @Input() isMenu: boolean = false;

  constructor(private router: Router) {}

  navigate() {
    if (this.link.length > 0)
      window.location.href = this.link;
  }
}
