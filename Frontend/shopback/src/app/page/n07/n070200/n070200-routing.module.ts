import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N070200Component } from './n070200.component';

const routes: Routes = [
  { path: '', component: N070200Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N070200RoutingModule {}
