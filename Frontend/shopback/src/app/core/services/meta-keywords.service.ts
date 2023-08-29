import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaKeywordsService {
  constructor(private metaService: Meta) { }

  setGlobalKeywords(keywords: string[]): void {
    const keywordsString = keywords.join(', ');
    this.metaService.updateTag({ name: 'keywords', content: keywordsString });
  }
}
