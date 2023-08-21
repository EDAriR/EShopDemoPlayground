import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N020100Component } from './n020100.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020100RoutingModule } from './n020100-routing.module';
import { N020101Component } from './n020101/n020101.component';



@NgModule({
  declarations: [
    N020100Component,
    N020101Component
  ],
  imports: [
    CommonModule,
    N020100RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule,
    ReactiveFormsModule
  ]
})
export class N020100Module { }
