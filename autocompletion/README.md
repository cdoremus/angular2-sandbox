# angular2-webpack autocompletion branch

# This is an Angular 2 project used to illustrate an autocompletion control

[![Dependency Status](https://david-dm.org/preboot/angular2-webpack/status.svg)](https://david-dm.org/preboot/angular2-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular2-webpack/dev-status.svg)](https://david-dm.org/preboot/angular2-webpack#info=devDependencies)

The home page contains a text input control. Entering text into the control will pull up an autocompletion list of users whose name contains the substring
entered in the text control. Selecting an item from the list causes it to be displayed in the text control.
The tab, up and down arrow keys can be used to scroll through the list and the Enter key used to complete a selection.

Data for the drop down is stored in the users.json file that is queried asychronously using the Angular 2 Http service.

TODO: Refactor autocompletion input into a separate presentation/dumb component and get Search button to work.

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
