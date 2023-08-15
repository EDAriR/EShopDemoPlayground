import { Pipe, PipeTransform } from '@angular/core';


/**
 *  產品類別名稱轉換
 *
 * @export
 * @class RecomndClsfyIdPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'recomndClsfyId',
})

export class RecomndClsfyIdPipe implements PipeTransform {
  transform(type: string): string {
    if (type === '1') {
      return '股票';
    } else if (type === '3') {
      return 'ETF';
    } else if (type === '4') {
      return '基金';
    }
    return '';
  }
}
