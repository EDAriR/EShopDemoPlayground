import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareModule } from 'src/app/share/share.module';
import { N010200RoutingModule } from './n010200-routing.module';
import { N010200Component } from './n010200.component';
@NgModule({
  declarations: [N010200Component],
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    ShareModule,
    N010200RoutingModule,

  ],
})
export class N010200Module {}
