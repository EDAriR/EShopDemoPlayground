import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareMaterialModule } from './share-material/share-material.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './page/login/login.component';

import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MetaTitleService } from './core/services/meta-title.service';
import { ErrorDialogComponent } from './share/dialog/error-dialog/error-dialog.component';
import { MetaDescriptionService } from './core/services/meta-description.service';
import { MetaKeywordsService } from './core/services/meta-keywords.service';

export function initializeApp(
  metaTitleService: MetaTitleService,
  metaDescriptionService: MetaDescriptionService,
  metaKeywordsService: MetaKeywordsService
  ) {
  // return () => {
  //   metaTitleService.setGlobalTitleFromApi().subscribe(data => {
  //     // 從 API 取得的資料中提取 Meta Title
  //     // const titleFromApi = data.title; // 假設 API 回傳的資料中有 title
  //     // 使用 API 回傳的 Meta Title 設定全域 Meta Title
  //     metaTitleService.setGlobalTitle('titleFromApi');
  //   });
  // };

  // 待修改為從 API 取得
  return () => {
    const globalDescription = '您的全域 Meta Description'; // 這裡設定全域 Meta Description
    metaDescriptionService.setGlobalDescription(globalDescription);

    const titleFromApi = 'shopBack後台';  // 這裡設定全域 Meta title
    metaTitleService.setGlobalTitle(titleFromApi);

    const globalKeywords = ['關鍵字1', '關鍵字2', '關鍵字3']; // 設定您想要的多個關鍵字
    metaKeywordsService.setGlobalKeywords(globalKeywords);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareMaterialModule,
    FormsModule,
    DashboardModule
  ],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  },
    MetaTitleService,
    MetaDescriptionService,
    MetaKeywordsService,
  {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    multi: true,
    deps: [
      MetaTitleService,
      MetaDescriptionService,
      MetaKeywordsService
    ]
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
