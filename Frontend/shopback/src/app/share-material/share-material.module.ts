import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatRippleModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatMenuModule,
      MatTreeModule,
  ]
})
export class ShareMaterialModule { }
