import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020400Component } from './n020400.component';

const routes: Routes = [
  { path: '', component: N020400Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020400RoutingModule {}
