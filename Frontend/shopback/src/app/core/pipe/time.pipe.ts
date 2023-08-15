import { Pipe, PipeTransform } from '@angular/core';

/**
 * 時間
 */
@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {

  /**
   * 時間轉換
   * 可選擇輸出格式
   * time: 預設，格式為YYYY/MM/DD HH:MM:SS
   * date: 格式為YYYY/MM/DD
   * @param value 格式為YYYYMMDDHHMMSS
   * @param type 輸出格式選擇
   */
  transform(value: string, type?: string): unknown {
    if (!value) {
      return '';
    }
    type = type ? type : 'time';
    const yearMonthDate = [
      value.slice(0, 4),
      value.slice(4, 6),
      value.slice(6, 8),
    ].join('/');
    const hourMinuteSecond = [
      value.slice(8, 10),
      value.slice(10, 12),
      value.slice(12),
    ].join(':');
    let result = '';
    if (type === 'time') {
      result += [yearMonthDate, hourMinuteSecond].join(' ');
    } else if (type === 'date') {
      result += yearMonthDate;
    }
    return result;
  }
}
