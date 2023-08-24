import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { N020300Component } from './n020300.component';
import { N020301Component } from './n020301/n020301.component';
import { N020302Component } from './n020302/n020302.component';
import { N020303Component } from './n020303/n020303.component';
import { N020304Component } from './n020304/n020304.component';
import { N020305Component } from './n020305/n020305.component';

const routes: Routes = [
  { path: '', component: N020300Component },
  { path: 'n020301', component: N020301Component , data: { keep: false } },
  { path: 'n020302', component: N020302Component , data: { keep: false } },
  { path: 'n020303', component: N020303Component , data: { keep: false } },
  { path: 'n020304', component: N020304Component , data: { keep: false } },
  { path: 'n020305', component: N020305Component , data: { keep: false } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N020300RoutingModule {}
