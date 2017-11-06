
/**
 *  Use Case 1 - Authentication not required.
 *  Use Case 2 - Authentication required, redirecting to a login form.
 *  Use Case 3 - Autenthication required.
 */
var useCase = 1;
var targetUrl = "/login";

// Pentaho service call.
var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {

  if (useCase == 1) {
    // Use Case I - Authentication not required.

    if (xmlHttp.status == 200 && xmlHttp.responseURL.endsWith("/pentaho/Home")) {
      document.write("<script id =\"pentahoHeaderScript\" src=\"/pentaho/plugin/pentaho-cdf-dd/api/renderer/cde-embed.js\">\x3C/script>");
    }

  }
  else if (useCase == 2) {
    // Use Case II - Authentication required, redirecting to a login form.

    if (xmlHttp.status == 200 && !xmlHttp.responseURL.endsWith("/pentaho/Home")) {
      window.location.href = targetUrl;
    }
    else if (xmlHttp.status != 0) {
      document.write("<script id =\"pentahoHeaderScript\" src=\"/pentaho/plugin/pentaho-cdf-dd/api/renderer/cde-embed.js\">\x3C/script>");
    }

  }
  else if (useCase == 3) {
    // Use Case III - Autenthication required.

    if (xmlHttp.status == 200 && !xmlHttp.responseURL.endsWith("/pentaho/Home")) {

      var username = prompt('Username:','');
      var password = prompt('Password:','');

      var xmlHttp2 = new XMLHttpRequest();

      xmlHttp2.onreadystatechange = function() {
        if (xmlHttp2.status == 200 && xmlHttp2.responseURL.endsWith("/pentaho/Home")) {
          document.write("<script id =\"pentahoHeaderScript\" src=\"/pentaho/plugin/pentaho-cdf-dd/api/renderer/cde-embed.js\">\x3C/script>");
        }
        else if (xmlHttp2.status != 0) {
          alert("Pentaho autenthication failed with message '" + xmlHttp2.statusText + "'!");
          window.location.reload();
        }
      }

      xmlHttp2.open("GET", "/pentaho/Home", false);
      xmlHttp2.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
      xmlHttp2.send(null);

    }
    else if (xmlHttp.status != 0) {
      document.write("<script id =\"pentahoHeaderScript\" src=\"/pentaho/plugin/pentaho-cdf-dd/api/renderer/cde-embed.js\">\x3C/script>");
    }
  }
  else {
    alert("Use case not admintted for Pentaho header script.");
  }
}

xmlHttp.open("GET", "/pentaho/Home", false);
xmlHttp.send(null);

