import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { N00Component } from './n00.component';
import { N00RoutingModule } from './n00-routing.module';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { N000100Component } from './n000100/n000100.component';
import { N000200Component } from './n000200/n000200.component';
import { N000300Component } from './n000300/n000300.component';



@NgModule({
  declarations: [N00Component, N000100Component, N000200Component, N000300Component],
  imports: [
    CommonModule,
    ShareMaterialModule,
    PipeModule,
    N00RoutingModule,
    NgChartsModule
  ],
  providers: [
    DatePipe,
    { provide: NgChartsConfiguration, useValue: { generateColors: false } }
  ]
})
export class N00Module { }
