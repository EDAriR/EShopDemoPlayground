import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareModule } from 'src/app/share/share.module';
import { N010100RoutingModule } from './n010100-routing.module';
import { N010100Component } from './n010100.component';
import { N010101Component } from './n010101/n010101.component';
@NgModule({
  declarations: [N010100Component, N010101Component],
  imports: [
    CommonModule,
    N010100RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule
  ],
})
export class N010100Module {}
