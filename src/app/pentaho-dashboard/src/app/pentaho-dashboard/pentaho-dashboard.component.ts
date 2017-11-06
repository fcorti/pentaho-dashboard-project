import { Component, AfterViewInit, Input } from '@angular/core';

import { PentahoDashboardService } from '../shared/pentaho-dashboard.service';

@Component({
  selector: 'pentaho-dashboard',
  templateUrl: './pentaho-dashboard.component.html',
  styleUrls: ['./pentaho-dashboard.component.css']
})
export class PentahoDashboardComponent implements AfterViewInit {

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

  constructor(private pentahoDashboardService: PentahoDashboardService) {
  }

  ngAfterViewInit() {

    if (this.pentahoDashboardService.isLoggedIn()) {

      this.pentahoDashboardService.addHeaderLinks();

      if (this.masterDashboardId != null) {
        this.pentahoDashboardService.renderDashboardDependingOnDashboard(this.pentahoPath, this.id, this.params, this.masterDashboardId, this.masterDashboardParams);
      }
      else if (this.masterHtmlElementId != null) {
        this.pentahoDashboardService.renderDashboardDependingOnHtmlElement(this.pentahoPath, this.id, this.params, this.masterHtmlElementId);
      }
      else {
        this.pentahoDashboardService.renderDashboard(this.pentahoPath, this.id);        
      }

    }
    else {
      console.log("Pentaho dashboard requires a valid Pentaho session.\n\nPlease login first.");
    }
  }    
}
