import { Component, AfterViewInit, Input } from '@angular/core';

import { AdfPentahoService } from '../shared/adf-pentaho.service';

@Component({
  selector: 'adf-pentaho-adf-pentaho-dashboard',
  templateUrl: './adf-pentaho-dashboard.component.html',
  styleUrls: ['./adf-pentaho-dashboard.component.css']
})
export class AdfPentahoDashboardComponent implements AfterViewInit {

  @Input('pentahoPath')
  private pentahoPath : string;

  @Input('id')
  private id : string;

  @Input('params')
  private params : string[] = [];

  @Input('masterDashboardId')
  private masterDashboardId : string = null;

  @Input('masterDashboardParams')
  private masterDashboardParams : string[] = [];

  @Input('masterHtmlElementId')
  private masterHtmlElementId : string = null;

  constructor(private adfPentahoService: AdfPentahoService) {
  }

  ngAfterViewInit() {

    if (this.adfPentahoService.isLoggedIn()) {

      this.adfPentahoService.addHeaderLinks();

      if (this.masterDashboardId != null) {
        this.adfPentahoService.renderDashboardDependingOnDashboard(this.pentahoPath, this.id, this.params, this.masterDashboardId, this.masterDashboardParams);
      }
      else if (this.masterHtmlElementId != null) {
        this.adfPentahoService.renderDashboardDependingOnHtmlElement(this.pentahoPath, this.id, this.params, this.masterHtmlElementId);
      }
      else {
        this.adfPentahoService.renderDashboard(this.pentahoPath, this.id);        
      }

    }
    else {
      console.log("Pentaho dashboard requires a valid Pentaho session.\n\nPlease login first.");
    }
  }    
}
