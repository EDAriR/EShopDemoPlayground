import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N010200Component } from './n010200.component';

const routes: Routes = [
  { path: '', component: N010200Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N010200RoutingModule {}
