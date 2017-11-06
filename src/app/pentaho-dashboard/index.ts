import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PentahoDashboardComponent } from './src/app/pentaho-dashboard/pentaho-dashboard.component';
import { PentahoDashboardService } from './src/app/shared/pentaho-dashboard.service';

export { PentahoDashboardComponent } from './src/app/pentaho-dashboard/pentaho-dashboard.component';
export { PentahoDashboardService } from './src/app/shared/pentaho-dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    PentahoDashboardService
  ],
  exports: [
    PentahoDashboardComponent
  ],
  declarations: [
    PentahoDashboardComponent
  ]
})
export class PentahoDashboardModule { }
