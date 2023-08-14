import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTrackComponent } from './order-track/order-track.component';
import { ShareMaterialModule } from '../share-material/share-material.module';



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
