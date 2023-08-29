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
      {
        path: 'n020100',
        loadChildren: () =>
          import('../page/n02/n020100/n020100.module').then((m) => m.N020100Module),
      },
      {
        path: 'n020200',
        loadChildren: () =>
          import('../page/n02/n020200/n020200.module').then((m) => m.N020200Module),
      },
      {
        path: 'n020300',
        loadChildren: () =>
          import('../page/n02/n020300/n020300.module').then((m) => m.N020300Module),
      },
      {
        path: 'n020300/n020303',
        loadChildren: () =>
          import('../page/n02/n020300/n020300.module').then((m) => m.N020300Module),
      },
      {
        path: 'n020300/n020304',
        loadChildren: () =>
          import('../page/n02/n020300/n020300.module').then((m) => m.N020300Module),
      },
      {
        path: 'n020400',
        loadChildren: () =>
          import('../page/n02/n020400/n020400.module').then((m) => m.N020400Module),
      },
      {
        path: 'n070100',
        loadChildren: () =>
          import('../page/n07/n070100/n070100.module').then((m) => m.N070100Module),
      },
      {
        path: 'n070200',
        loadChildren: () =>
          import('../page/n07/n070200/n070200.module').then((m) => m.N070200Module),
      },
      {
        path: 'n070300',
        loadChildren: () =>
          import('../page/n07/n070300/n070300.module').then((m) => m.N070300Module),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
