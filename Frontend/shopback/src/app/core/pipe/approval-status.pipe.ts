import { Pipe, PipeTransform } from '@angular/core';
import { Const } from '../services/const';

/**
 * API 審核狀態 欄位參數轉換為文字
 *
 * @class ApprovalStatusPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'approvalStatus',
})
export class ApprovalStatusPipe implements PipeTransform {
  /**
   * API 審核狀態 欄位參數轉換為中文對應名稱
   *
   * @param {string} type - API檢核欄位參數
   * @returns {string} 欄位狀態對應中文名稱
   */
  transform(type: string): string {
    if (type === Const.statusZero) {
      return Const.edit;
    } else if (type === Const.statusOne) {
      return Const.pendingReview;
    } else if (type === Const.statusTwo) {
      return Const.reviewed;
    } else if (type === Const.statusThree) {
      return Const.refuse;
    }
    return '';
  }
}
