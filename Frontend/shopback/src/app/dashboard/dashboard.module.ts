import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareMaterialModule } from '../share-material/share-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { MenuComponent } from './dashboard/menu/menu.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    FooterComponent,

  ],
  imports: [CommonModule, DashboardRoutingModule, ShareMaterialModule,RouterModule],
  exports: [DashboardComponent]
})
export class DashboardModule { }
