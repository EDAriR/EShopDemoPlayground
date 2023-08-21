import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020100Component } from './n020100.component';
import { N020101Component } from './n020101/n020101.component';

const routes: Routes = [
  { path: '', component: N020100Component },
  { path: 'n020101', component: N020101Component , data: { keep: false } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020100RoutingModule {}
