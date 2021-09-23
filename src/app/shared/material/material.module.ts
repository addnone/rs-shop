import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
  ],
})
export class MaterialModule { }
