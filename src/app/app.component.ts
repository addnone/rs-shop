import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rs-shop';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ){
    this.matIconRegistry.addSvgIcon(
      'vk',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/core/social/vk.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/core/social/facebook.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/core/social/insta.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'ok',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/core/social/ok.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/core/social/youtube.svg'),
    );
  }
}
