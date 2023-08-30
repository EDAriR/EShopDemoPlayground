import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N070200RoutingModule } from './n070200-routing.module';
import { N070200Component } from './n070200.component';
import { N070201Component } from './n070201/n070201.component';



@NgModule({
  declarations: [
    N070200Component,
    N070201Component
  ],
  imports: [
    CommonModule,
    N070200RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule,
    ReactiveFormsModule,
  ]
})
export class N070200Module { }
