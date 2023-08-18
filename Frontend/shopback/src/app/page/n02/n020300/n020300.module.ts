import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020300RoutingModule } from './n020300-routing.module';
import { N020300Component } from './n020300.component';



@NgModule({
  declarations: [N020300Component],
  imports: [
    CommonModule,
    N020300RoutingModule,
    FormsModule,
    PipeModule,
    ShareModule,
    ShareMaterialModule
  ]
})
export class N020300Module { }
