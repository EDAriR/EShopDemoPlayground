import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authStatus',
})
export class AuthStatusPipe implements PipeTransform {
  transform(auth: string): unknown {
    if (auth === 'Y') {
      return 'V';
    } else {
      return '';
    }
  }
}
