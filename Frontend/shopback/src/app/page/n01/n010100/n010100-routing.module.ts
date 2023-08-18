import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { N010100Component } from './n010100.component';
import { N010101Component } from './n010101/n010101.component';

const routes: Routes = [
  { path: '', component: N010100Component },
  { path: 'n010101', component: N010101Component , data: { keep: false } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N010100RoutingModule {}
