import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionNumber',
})
export class QuestionNumberPipe implements PipeTransform {
  transform(type: number): unknown {
    if (type === 0) {
      return '無';
    } else {
      return `第${type}題`;
    }
    return '';
  }
}
