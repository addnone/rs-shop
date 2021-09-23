import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoBlockComponent } from './components/header/components/info-block/info-block.component';
import { NavBlockComponent } from './components/header/components/nav-block/nav-block.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { SearchInputComponent } from './components/header/components/nav-block/search-input/search-input.component';
import { SharedModule } from '../shared/shared.module';
import { MainCategoriesBlockComponent } from './components/header/components/main-categories-block/main-categories-block.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InfoBlockComponent,
    NavBlockComponent,
    ContactComponent,
    FooterComponent,
    SocialLinkComponent,
    SearchInputComponent,
    MainCategoriesBlockComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
