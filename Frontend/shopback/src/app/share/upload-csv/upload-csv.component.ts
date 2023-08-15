import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css'],
})
export class UploadCsvComponent implements OnInit {
  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;

  file: File;
  message: string;

  // 待確認傳入資料
  @Output() fileGroup = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  selectFile(): void {
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      this.file = fileUpload.files[0];
      if (this.file) {
        this.message = this.file.name;
      }
    };
    fileUpload.click();
  }

  uploadCsv() {
    console.log(this.file);
    if (this.file) {
      this.setFile(this.file);
      //   this.dataSvc.postCsv020100(this.file).subscribe(
      //     (result: any) => {
      //       this.errorService.errorCheck(result);
      //     },
      //     (error: HttpErrorResponse) => this.errorService.handleError(error)
      //   );
    }
  }

  // 傳送整理好的資料給父組件，用於呼叫api
  setFile(i) {
    this.fileGroup.emit(i);
  }
}
