# Adf-Pentaho components

This project contains the components and services to be used to integrate the Pentaho CDE dashboards into an [Alfresco Application Development Framework](https://github.com/Alfresco/alfresco-ng2-components) application.

Considering that an Alfresco ADF application is a standard Angular application, the components should be used also there, without the ADF components.

## Publishing the adf-pentaho components

The NPM package is published [here](https://www.npmjs.com/package/adf-pentaho).
To publish the release, update the `package.json` file with the correct `version` tag value, then follow the commands below from a terminal.

```sh
cd src/app/adf-pentaho/
npm publish
```

Pay attention that only an incremental version of the release can be published.
To remove the release from the public repository, use `npm unpublish adf-pentaho@<version> --force`. Removing the releases is discouraged but sometimes can help.


