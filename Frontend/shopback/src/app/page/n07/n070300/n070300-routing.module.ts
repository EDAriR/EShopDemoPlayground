import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N070300Component } from './n070300.component';

const routes: Routes = [
  { path: '', component: N070300Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N070300RoutingModule {}
