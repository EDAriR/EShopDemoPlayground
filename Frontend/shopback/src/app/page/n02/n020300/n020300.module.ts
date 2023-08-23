import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020300RoutingModule } from './n020300-routing.module';
import { N020300Component } from './n020300.component';
import { N020301Component } from './n020301/n020301.component';
import { N020302Component } from './n020302/n020302.component';



@NgModule({
  declarations: [N020300Component, N020301Component, N020302Component],
  imports: [
    CommonModule,
    N020300RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule,
    ReactiveFormsModule
  ]
})
export class N020300Module { }
