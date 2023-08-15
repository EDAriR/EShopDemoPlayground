import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class CustomValidator {
  //輸入欄位驗證英文數字
  static enNumValidator(enNum: FormControl): any {
    if (enNum.pristine) {
      return null;
    }
    enNum.markAsTouched();
    const REGEXP = /^[a-zA-Z0-9]+$/;
    if (REGEXP.test(enNum.value)) {
      return null;
    }
    return {
      enNumValidator: true,
    };
  }

  //輸入欄位驗證中文英文數字
  static cnEnNumNoPunValidator(cnEnNumNoPun: FormControl): any {
    if (cnEnNumNoPun.pristine) {
      return null;
    }
    cnEnNumNoPun.markAsTouched();
    const REGEXP = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
    if (REGEXP.test(cnEnNumNoPun.value)) {
      return null;
    }
    return {
      cnEnNumNoPunValidator: true,
    };
  }

  //輸入欄位驗證中文英文數字，。! ?空白鍵
  static cnEnNumHasPunValidator(cnEnNumHasPun: FormControl): any {
    if (cnEnNumHasPun.pristine) {
      return null;
    }
    cnEnNumHasPun.markAsTouched();
    const REGEXP = /^[!?\u3002\uff0c,.\u0020\u4e00-\u9fa5a-zA-Z0-9]+$/;
    if (REGEXP.test(cnEnNumHasPun.value)) {
      return null;
    }
    return {
      cnEnNumHasPunValidator: true,
    };
  }
  /**
   * 檢核欄位輸入不可全為空白鍵
   * @param control FormControl
   * @returns Valid狀態
   */
  static noWhitespaceValidator(control: FormControl): any {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }
}
