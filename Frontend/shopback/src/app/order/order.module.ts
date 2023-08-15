import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareShareMaterialModule } from '../share-material/share-material.module';
import { OrderTrackComponent } from './order-track/order-track.component';



@NgModule({
  declarations: [
    OrderTrackComponent
  ],
  imports: [
    CommonModule,
    ShareShareMaterialModule,
  ],
})
export class OrderModule { }
