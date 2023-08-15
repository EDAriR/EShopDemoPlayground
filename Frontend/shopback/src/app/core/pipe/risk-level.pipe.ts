import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riskLevel',
})
export class RiskLevelPipe implements PipeTransform {
  transform(type: string): string {
    if (type === 'RR1') {
      return '保守型';
    } else if (type === 'RR2') {
      return '穩健型';
    } else if (type === 'RR3') {
      return '平衡型';
    } else if (type === 'RR4') {
      return '成長型';
    } else if (type === 'RR5') {
      return '積極型';
    }
    return '';
  }
}
