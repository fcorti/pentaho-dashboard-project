import { Component, AfterViewInit, Input } from '@angular/core';

import { AdfPentahoService } from '../shared/adf-pentaho.service';

@Component({
  selector: 'adf-pentaho-adf-pentaho-dashboard',
  templateUrl: './adf-pentaho-dashboard.component.html',
  styleUrls: ['./adf-pentaho-dashboard.component.css']
})
export class AdfPentahoDashboardComponent implements AfterViewInit {

  @Input('id')
  private id : string;

  @Input('pentahoPath')
  private pentahoPath : string;

  @Input('width')
  private width : string;

  constructor(private adfPentahoService: AdfPentahoService) {
  }

  ngAfterViewInit() {

    if (this.adfPentahoService.isNotLoggedIn()) {
      alert("Pentaho dashboard requires a valid Pentaho session.\n\nPlease login first.");
    }
    else {
      this.adfPentahoService.addHeaderLinks();
      this.adfPentahoService.renderDashboard(this.id,this.pentahoPath);
    }

  }
    
}
