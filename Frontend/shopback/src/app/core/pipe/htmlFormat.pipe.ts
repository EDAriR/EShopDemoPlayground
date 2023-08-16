import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'htmlFormat',
})
export class HtmlFormatPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(style: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
