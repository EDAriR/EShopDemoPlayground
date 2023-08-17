import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { N00Component } from './n00.component';
import { N00RoutingModule } from './n00-routing.module';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [N00Component],
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
