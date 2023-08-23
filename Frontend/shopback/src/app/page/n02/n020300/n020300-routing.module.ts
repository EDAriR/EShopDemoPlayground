import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020300Component } from './n020300.component';
import { N020301Component } from './n020301/n020301.component';
import { N020302Component } from './n020302/n020302.component';

const routes: Routes = [
  { path: '', component: N020300Component },
  { path: 'n020301', component: N020301Component , data: { keep: false } },
  { path: 'n020302', component: N020302Component , data: { keep: false } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020300RoutingModule {}
