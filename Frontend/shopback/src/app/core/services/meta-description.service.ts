import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaDescriptionService {
  constructor(private metaService: Meta, private http: HttpClient) { }

  //待修改為從 API 取得
  setGlobalDescriptionFromApi(): Observable<any> {
    return this.http.get('API URL');
  }

  setGlobalDescription(description: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
  }
}
