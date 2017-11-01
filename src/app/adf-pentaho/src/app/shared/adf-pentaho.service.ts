import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AdfPentahoService {

  static readonly PENTAHO_HOME_URI = "/pentaho/Home";
  static readonly PENTAHO_LOGOUT_URI = "/pentaho/Logout";
  static readonly PENTAHO_HEADER_BOOTSTRAP_LINK_ID = "pentahoHeaderBootstrap";
  
  private username: string;
  private password: string;

  constructor(
    private http: Http) {
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password) {
    this.password = password;
  }

  isLoggedIn(): boolean {
    return !this.isNotLoggedIn();
  }

  isNotLoggedIn(): boolean {
    return (document.getElementById("pentahoHeaderScript") == null);
  }

  logIn(targetUrl: string) {

    var headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(this.username + ":" + this.password));

    this.http.get(
      AdfPentahoService.PENTAHO_HOME_URI,
      { headers: headers })
    .subscribe(
      data => {
        if (data.status == 200 && data.url.indexOf(AdfPentahoService.PENTAHO_HOME_URI) >= 0) {
          if (targetUrl != null) {
            window.location.href = targetUrl;
          }
        }
      },
      error => {
        console.log(error);
        alert("Pentaho login failed with message '" + error.statusText + "'."); 
      }
    );

  }

  logOut(targetUrl: string) {

    this.http.get(
      AdfPentahoService.PENTAHO_LOGOUT_URI)
    .subscribe(
      data => {
        if (targetUrl != null) {
          window.location.href = targetUrl;
        }
      },
      error => { 
        console.log(error);
        alert("Pentaho logout failed!\n\nStatus=" + error.status + "\nType=" + error.type + "\nOk=" + error.ok + "\nUrl=" + error.url); 
      }
    );

  }

  addHeaderLinks() {

    // Script tag is not rendered in an Angular application, so it is dynamicallly added to the DOM (not a best practice).
    if (document.getElementById(AdfPentahoService.PENTAHO_HEADER_BOOTSTRAP_LINK_ID) == null) {

      var headerLinkElement = document.createElement("link");
      headerLinkElement.id = AdfPentahoService.PENTAHO_HEADER_BOOTSTRAP_LINK_ID;
      headerLinkElement.rel = "stylesheet";
      headerLinkElement.type = "text/css";
      headerLinkElement.href = "http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css";

      document.head.appendChild(headerLinkElement);
    }

  }

  renderDashboard(htmlId:string, path: string) {

    var dashboardScriptElement = document.createElement("script");
    dashboardScriptElement.type = "text/javascript";
    dashboardScriptElement.innerHTML = "require([\"dash!" + path + "\"],function(Dashboard) { (new Dashboard(\"" + htmlId + "\")).render(); });";

    document.getElementById(htmlId).appendChild(dashboardScriptElement);

  }

}
