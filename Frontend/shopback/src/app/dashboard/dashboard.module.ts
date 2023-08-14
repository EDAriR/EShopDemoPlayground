import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ShareMaterialModule } from '../share-material/share-material.module';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [DashboardComponent, MainComponent, MenuComponent],
  imports: [CommonModule, DashboardRoutingModule, ShareMaterialModule],
  exports: [DashboardComponent]
})
export class DashboardModule { }
