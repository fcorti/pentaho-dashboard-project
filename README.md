# Adf-Pentaho project

This project contains the Angular 2+ integration for Pentaho CDE Dashboards.

The project is tested in a generic Angular application but also to be used together with the [Alfresco Application Development Framework](https://github.com/Alfresco/alfresco-ng2-components) components.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Publishing the adf-pentaho components

The NPM package is published [here](https://www.npmjs.com/package/adf-pentaho).
To publish the release, update the `package.json` file with the correct `version` tag value, then follow the commands below from a terminal.

```sh
cd src/app/adf-pentaho/
npm publish
```

Pay attention that only an incremental version of the release can be published.
To remove the release from the public repository, use `npm unpublish adf-pentaho@<version> --force`. Removing the releases is discouraged but sometimes can help.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
