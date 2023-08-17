import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N00Component } from './n00.component';

const routes: Routes = [
  { path: '', component: N00Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class N00RoutingModule { }
