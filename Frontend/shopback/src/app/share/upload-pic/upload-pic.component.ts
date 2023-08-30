import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.scss'],
})
export class UploadPicComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  selectedFiles: File[] = [];

  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  uploadImages(): void {
    // 執行上傳圖片的邏輯
    if (this.selectedFiles.length > 0) {
      // 在這裡處理圖片上傳的邏輯，例如使用 HTTP 請求
    } else {
      console.log('No files selected.');
    }
  }

  // 待確認傳入資料
  @Output() fileGroup = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // 傳送整理好的資料給父組件，用於呼叫api
  setFile(i: any) {
    this.fileGroup.emit(i);
  }
}
