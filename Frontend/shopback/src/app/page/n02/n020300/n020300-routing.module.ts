import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020300Component } from './n020300.component';

const routes: Routes = [
  { path: '', component: N020300Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020300RoutingModule {}
