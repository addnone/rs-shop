import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class ShopModule { }
