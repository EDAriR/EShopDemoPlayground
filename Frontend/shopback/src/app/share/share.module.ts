import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { PipeModule } from 'src/app/core/pipe/pipe.module';
import { ShareMaterialModule } from '../share-material/share-material.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
import { ReturnDialogComponent } from './dialog/return-dialog/return-dialog.component';
import { ReviewDialogComponent } from './dialog/review-dialog/review-dialog.component';
import { FormTextComponent } from './form-text/form-text.component';
import { SpinnerOverlayComponent } from './spinner-overlay/spinner-overlay.component';
import { TableComponent } from './table/table.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { ValidatorInputComponent } from './validator-input/validator-input.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    SpinnerOverlayComponent,
    BreadcrumbsComponent,
    FormTextComponent,
    ValidatorInputComponent,
    UploadCsvComponent,
    ReviewDialogComponent,
    ReturnDialogComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ShareMaterialModule,
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
    FormTextComponent,
    ValidatorInputComponent,
    MatCheckboxModule
  ],
})
export class ShareModule {}
