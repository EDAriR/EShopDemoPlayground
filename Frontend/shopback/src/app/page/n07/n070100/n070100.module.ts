import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N070100RoutingModule } from './n070100-routing.module';
import { N070100Component } from './n070100.component';
import { N070101Component } from './n070101/n070101.component';



@NgModule({
  declarations: [
    N070100Component,
    N070101Component
  ],
  imports: [
    CommonModule,
    N070100RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule,
    ReactiveFormsModule
  ]
})
export class N070100Module { }
