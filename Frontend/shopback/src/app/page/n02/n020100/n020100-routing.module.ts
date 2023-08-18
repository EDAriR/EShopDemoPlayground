import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020100Component } from './n020100.component';

const routes: Routes = [
  { path: '', component: N020100Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020100RoutingModule {}
