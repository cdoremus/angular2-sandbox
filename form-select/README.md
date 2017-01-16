# An Exploration of the Form Select in Angular 2

This project is an example of how to use the HTML select control (aka dropdown) in Angular 2.

This project consists of three pages each demonstrating different ways of working with a select control:
1. Home page with two dropdown child components that use strings as select values in a template-driven form. This page also contains
child components, one that encapsulates an HTML button and another that is used for displaying informational messages.
2. Template driven form page with a template-driven form child component child that uses an object for the form select values.
3. Reactive form page with a reactive form child component that uses an object for the form select values.

All child components are designed as presentational components, containing only inputs and outputs.

## Build and run this project with Docker

1. Build the project:
``` bash
docker-compose build
```

2. Run the project in a Docker container:
``` bash
docker-compose up -d
```
After the app comes up, browse to [http://localhost](http://localhost) to run the application.

3. Stop the Docker container and delete it:
``` bash
docker-compose down
```
You can use ```docker-compose stop``` to stop the container without deleting it

## Seed Project
This project is based on the seed project [angular2-webpack](https://github.com/preboot/angular2-webpack)

## License

[MIT](/LICENSE)



