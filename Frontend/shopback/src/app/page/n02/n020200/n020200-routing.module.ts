import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020200Component } from './n020200.component';

const routes: Routes = [
  { path: '', component: N020200Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020200RoutingModule {}
