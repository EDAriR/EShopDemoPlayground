import { Pipe, PipeTransform } from '@angular/core';

/**
 *  題型 1.單選題 2.複選題 3.是非題
 */
@Pipe({
  name: 'qaTypeStatus',
})
export class QaTypeStatusPipe implements PipeTransform {
  transform(type: string): string {
    if (type === '1') {
      return '單選題';
    } else if (type === '2') {
      return '複選題';
    } else if (type === '3') {
      return '是非題';
    }
    return '';
  }
}
