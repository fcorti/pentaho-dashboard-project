import { Component, AfterViewInit } from '@angular/core';

import { AdfPentahoService } from './adf-pentaho/src/app/shared/adf-pentaho.service';

@Component({
  selector: 'adf-pentaho-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private adfPentahoService: AdfPentahoService) {
  }

  ngAfterViewInit() {

    // Credentials.
    this.adfPentahoService.setUsername("admin");
    this.adfPentahoService.setPassword("password");

    // Login.
    if (this.adfPentahoService.isNotLoggedIn()) {
      alert("Not logged... press OK to login and reload the page automatically.");
      this.adfPentahoService.logIn("/");
    }
  }

}