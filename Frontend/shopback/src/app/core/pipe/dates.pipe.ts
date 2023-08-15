import { Pipe, PipeTransform } from '@angular/core';

/**
 * 時間 格式為YYYY/MM/DD
 */
@Pipe({
  name: 'dates',
})
export class DatesPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value) {
      const yearMonthDate = [
        value.slice(0, 4),
        value.slice(4, 6),
        value.slice(6, 8),
      ].join('/');
      return [yearMonthDate].join(' ');
    } else {
      return '';
    }
  }
}
