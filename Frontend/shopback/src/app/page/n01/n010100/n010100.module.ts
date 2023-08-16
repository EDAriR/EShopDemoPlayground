import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N010100RoutingModule } from './n010100-routing.module';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareModule } from 'src/app/share/share.module';
import { N010100Component } from './n010100.component';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { N01Module } from '../n01.module';



@NgModule({
  declarations: [N010100Component,],
  imports: [
    CommonModule,
    N010100RoutingModule,
    ShareMaterialModule,
    FormsModule,
    PipeModule,
    ShareModule,
    N01Module
  ]
})
export class N010100Module { }
