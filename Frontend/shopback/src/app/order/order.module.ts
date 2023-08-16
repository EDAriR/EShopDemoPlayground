import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareMaterialModule } from '../share-material/share-material.module';
import { OrderTrackComponent } from './order-track/order-track.component';



@NgModule({
  declarations: [
    OrderTrackComponent
  ],
  imports: [
    CommonModule,
    ShareMaterialModule,
  ],
})
export class OrderModule { }
