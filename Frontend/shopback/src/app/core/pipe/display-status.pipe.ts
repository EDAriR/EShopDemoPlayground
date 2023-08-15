import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayStatus',
})
export class DisplayStatusPipe implements PipeTransform {
  transform(type: string): string {
    if (type === '1') {
      return '是';
    } else if (type === '0') {
      return '否';
    }
    return '';
  }
}
