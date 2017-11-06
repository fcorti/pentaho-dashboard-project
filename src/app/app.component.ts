import { Component, AfterViewInit } from '@angular/core';

import { PentahoDashboardService } from './pentaho-dashboard/src/app/shared/pentaho-dashboard.service';

@Component({
  selector: 'pentaho-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private pentahoDashboardService: PentahoDashboardService) {
  }

  ngAfterViewInit() {

    // Credentials.
    this.pentahoDashboardService.setUsername("admin");
    this.pentahoDashboardService.setPassword("password");

    // Login.
    if (this.pentahoDashboardService.isNotLoggedIn()) {
      alert("Not logged... press OK to login and reload the page automatically.");
      this.pentahoDashboardService.logIn("/");
    }
  }

}