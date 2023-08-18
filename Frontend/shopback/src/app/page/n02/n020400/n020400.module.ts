import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N020400Component } from './n020400.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020400RoutingModule } from './n020400-routing.module';



@NgModule({
  declarations: [
    N020400Component
  ],
  imports: [
    CommonModule,
    N020400RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule
  ]
})
export class N020400Module { }
