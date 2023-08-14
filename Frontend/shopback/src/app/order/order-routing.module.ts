import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderTrackComponent } from './order-track/order-track.component';

const routes: Routes = [
  {
    path: '',
    component: OrderTrackComponent,
    children: [{ path: 'orderTrack', component: OrderTrackComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
