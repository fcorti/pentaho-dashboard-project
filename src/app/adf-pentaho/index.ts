import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AdfPentahoDashboardComponent } from './src/app/adf-pentaho-dashboard/adf-pentaho-dashboard.component';
import { AdfPentahoService } from './src/app/shared/adf-pentaho.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    AdfPentahoService
  ],
  exports: [
    AdfPentahoDashboardComponent
  ],
  declarations: [
    AdfPentahoDashboardComponent
  ]
})
export class AdfPentahoModule { }
