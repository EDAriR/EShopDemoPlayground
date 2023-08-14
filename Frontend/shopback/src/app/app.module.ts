import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareMaterialModule } from './share-material/share-material.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
