import { Pipe, PipeTransform } from '@angular/core';

/**
 * 使用者狀態 Y:正常、N:鎖定
 */
@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(type: string): string {
    if (type === 'Y') {
      return '正常';
    } else if (type === 'N') {
      return '鎖定';
    }
    return '';
  }
}
