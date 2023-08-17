import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { keep: false },
    children: [
      {
        path: 'n00',
        loadChildren: () =>
          import('../page/n00/n00.module').then((m) => m.N00Module),
      },
      {
        path: 'n010100',
        loadChildren: () =>
          import('../page/n01/n010100/n010100.module').then((m) => m.N010100Module),
      },
      {
        path: 'n010200',
        loadChildren: () =>
          import('../page/n01/n010200/n010200.module').then((m) => m.N010200Module),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
