import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NGXLogger } from 'ngx-logger';
import { Observable, of } from 'rxjs';
import { ErrorMsg } from 'src/app/model/errorMsg';
import { ErrorDialogComponent } from 'src/app/share/dialog/error-dialog/error-dialog.component';
import { body } from '../../../model/body';
import { Const } from '../const';

/**
 * 錯誤處理相關方法
 *
 * @class ErrorService
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorData: ErrorMsg = new ErrorMsg;
  logger: any;

  constructor(
    public dialog: MatDialog,
    private location: Location
  ) {}

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack || '';
  }

  getServerMessage(error: HttpErrorResponse): string {
    return (
      `Backend returned code ${error.status}, ` +
      `message: ${error.message} ` +
      `body was: ${error.error}`
    );
  }

  getServerStack(error: HttpErrorResponse): string {
    // handle stack trace
    return 'stack';
  }

  /**
   * server無回應時，顯示dialog提示錯誤
   *
   * @param {object | string}error
   * @returns
   */
  handleError(error: Response | any): Observable<any> {
    // handle stack trace
    if (error.length) {
      this.logger.error(error);
    }
    this.dialog.open(ErrorDialogComponent, {
      hasBackdrop: false,
      data: {
        msg: '系統錯誤',
      },
    });
    return of(null);
  }

  // 已經用不到了，待移除
  // 檢核api是否傳入錯誤訊息
  errorCheck(result: any): void {
    if (result.body !== undefined && result.body.errorCode) {
      this.errorData = result.body;
      this.logger.error(
        this.errorData.msgCode + ':' + this.errorData.msgContent
      );
      this.dialog.open(ErrorDialogComponent, {
        hasBackdrop: false,
        data: {
          msg: this.errorData.msgContent,
        },
      });
    }
  }

  /**
   * 檢核api錯誤訊息
   *
   * @param {object} result - body內容
   */
  checkMsgCode(result: body): void {
    if (this.dialog.openDialogs.length === 0) {
      if (result.msgCode !== Const.apiResSuccessCode) {
        this.dialog.open(ErrorDialogComponent, {
          disableClose: true,
          data: {
            msg: result.msgContent,
            result: result,
          },
        });
      }
      if (JSON.stringify(result.result) === JSON.stringify({})) {
        this.dialog
          .open(ErrorDialogComponent, {
            hasBackdrop: false,
            data: {
              msg: '查無資料',
            },
          })
          .afterClosed()
          .subscribe(() => {
            this.location.back();
          });
      }
    }
  }
}
