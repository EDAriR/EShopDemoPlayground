import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from 'src/app/share-material/share-material.module';
import { ShareModule } from 'src/app/share/share.module';
import { N020300RoutingModule } from './n020300-routing.module';
import { N020300Component } from './n020300.component';
import { N020301Component } from './n020301/n020301.component';
import { N020303Component } from './n020303/n020303.component';
import { N020304Component } from './n020304/n020304.component';
import { N020305Component } from './n020305/n020305.component';
import { N0203dialogComponent } from './n0203dialog/n0203dialog.component';



@NgModule({
  declarations: [N020300Component, N020301Component, N020303Component, N020304Component, N0203dialogComponent, N020305Component],
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
