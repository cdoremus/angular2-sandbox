## angular2-sandbox access-control-routing branch

# This is an Angular 2 project used to experiment with access control routing guards

[![Dependency Status](https://david-dm.org/preboot/angular2-webpack/status.svg)](https://david-dm.org/preboot/angular2-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular2-webpack/dev-status.svg)](https://david-dm.org/preboot/angular2-webpack#info=devDependencies)


Launching the application displays a login page, which is the template for the LoginComponent. The LoginComponent
uses the LoginService to check the username and password and if found in our user database (public/users.json)
a login token is cached in sessionStorage and the user is forwared to the home page.
At the same time, the menu Login link text is changed to Logout.

The LoginGuard implements the CanActivate interface used to guard all application URLs (see app.routes.ts).
Authentication is checked in the LoginGuard.canActivate() method and an Observable&lt;boolean&gt; with value of true is returned if the the
user has successfully logged in allowing navigation to proceed. The Observable&lt;boolean&gt; is held by the LoginService
(LoginService#loggedInSubject). The Observable value is updated to true upon successful login and
to false when the Logout link is clicked (see LoginService#logout()). Logout also removes the login token from sessionStorage.

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
Automated end-to-end tests which exercies the main use cases including logging in and logging
out (see home.component.e2e-spec.ts) can be run after the server is started using this command:
```bash
npm run e2e
```

---
#### This project is based on the [angular2-webpack-starter](https://github.com/preboot/angular2-webpack/) project

#### License: [MIT](/LICENSE)
