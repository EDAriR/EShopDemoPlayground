import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N070100Component } from './n070100.component';
import { N070101Component } from './n070101/n070101.component';

const routes: Routes = [
  { path: '', component: N070100Component },
  { path: 'n070101', component: N070101Component , data: { keep: false } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N070100RoutingModule {}
