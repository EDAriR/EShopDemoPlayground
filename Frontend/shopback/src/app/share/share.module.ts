import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareShareMaterialModule } from '../share-material/share-material.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
import { FormTextComponent } from './form-text/form-text.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { TableComponent } from './table/table.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { ValidatorInputComponent } from './validator-input/validator-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AlertDialogComponent,
    SpinnerOverlayComponent,
    BreadcrumbsComponent,
    TableComponent,
    FormTextComponent,
    ValidatorInputComponent,
    UploadCsvComponent,
  ],
  imports: [
    CommonModule,
    ShareShareMaterialModule,
    FormsModule,
    PipeModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  exports: [
    AlertDialogComponent,
    SpinnerOverlayComponent,
    BreadcrumbsComponent,
    TableComponent,
    FormTextComponent,
    ValidatorInputComponent,
    MatCheckboxModule
  ],
})
export class ShareModule {}
