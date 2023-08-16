import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareMaterialModule,
    PipeModule,
  ]
})
export class N01Module { }
