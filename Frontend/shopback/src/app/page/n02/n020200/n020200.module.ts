import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { N020200Component } from './n020200.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020200RoutingModule } from './n020200-routing.module';



@NgModule({
  declarations: [
    N020200Component
  ],
  imports: [
    CommonModule,
    N020200RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule,
    ReactiveFormsModule
  ],
})
export class N020200Module { }
