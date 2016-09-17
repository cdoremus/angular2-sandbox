## angular2-sandbox access-control-routing branch

# This is an Angular 2 project used to experiment with access control routing guards

[![Dependency Status](https://david-dm.org/preboot/angular2-webpack/status.svg)](https://david-dm.org/preboot/angular2-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular2-webpack/dev-status.svg)](https://david-dm.org/preboot/angular2-webpack#info=devDependencies)


Launching the application displays a login page, which is the template for the LoginComponent. The LoginComponent
uses the LoginService to check the username and password and if found, a login token is cached in sessionStorage, and the
user is forwared to the home page.

The LoginComponent implements the CanActivate interface that is used as a guard
for all application URLs (see app.routes.ts). This guard is implemented in the LoginComponent.canActivate() method, where authetication is checked
via the LoginService and true returned if the the user has been successfully logged in, which allows navigation to proceed.

Build and run the application using the following commands:
```bash
#Install the code dependencies:
npm install

#Build and bundle the code:
npm run build

#Run unit tests:
npm test

#Start the server:
npm start
```
### Then browse to the following URL: [http://localhost:8080/](http://localhost:8080/)

#### This project is based on the [angular2-webpack-starter](https://github.com/preboot/angular2-webpack/) project

#### License: [MIT](/LICENSE)
