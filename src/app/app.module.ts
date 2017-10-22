import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdfPentahoModule } from './app.component';

import { AppComponent } from './adf-pentaho/adf-pentaho.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdfPentahoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
