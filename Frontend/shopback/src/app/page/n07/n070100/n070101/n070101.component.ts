import { Location } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Const } from 'src/app/core/services/const';
import { ReturnDialogComponent } from 'src/app/share/dialog/return-dialog/return-dialog.component';

@Component({
  selector: 'app-n070101',
  templateUrl: './n070101.component.html',
  styleUrls: ['./n070101.component.scss']
})
export class N070101Component {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('files') files!: ElementRef;

  data: any; // 定義用於存儲資料的變數
  tagString: string = '';
  form: FormGroup;
  const = Const;
  selectedPic: File | null = null;
  selectedFiles: File | null = null;

  constructor(
    public dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      hot: new FormControl('2'),
      disable: new FormControl('2'),
      startPicker: new FormControl(''),
      endPicker: new FormControl(''),
      file: new FormControl(''),
      pic: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.data = history.state.data; // 從路由狀態中獲取資料
    console.log()
    if (this.data !== undefined) {
      this.tagString = this.data.tag.join(', ');
      const data = {
        name: this.data.group,
        title: this.tagString,
        hot: this.data.message,
      };
      this.form.patchValue(data);
    }
  }

  // 圖片預覽
  private showImagePreview(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      console.log(event.target.result)
      this.selectedPic = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  triggerPicFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onPicChange(input: any) {
    if (input.files.length > 0) {
      this.selectedPic = input.files[0];
      if (this.selectedPic != null) {
        this.showImagePreview(this.selectedPic);
      }
    } else {
      this.selectedPic = null;
    }
  }

  triggerFileInput(): void {
    this.files.nativeElement.click();
  }

  onFileChange(event: any): void {
    this.selectedFiles = event.target.files;
  }

  goBack(): void {
    this.location.back();
  }

  openDialog(): any {
    const dialogRef = this.dialog.open(ReturnDialogComponent, {
      hasBackdrop: false,
      data: {
        title: '儲存成功',
      },
    });
  }
}
