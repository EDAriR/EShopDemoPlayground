import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareShareMaterialModule } from '../share-material/share-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [DashboardComponent, MainComponent, MenuComponent],
  imports: [CommonModule, DashboardRoutingModule, ShareShareMaterialModule],
  exports: [DashboardComponent]
})
export class DashboardModule { }
