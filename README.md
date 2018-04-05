# Backr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#Obtain Firebase credentials and place them in the following file:
  Create a free account at :https://firebase.google.com/
  Select: Create a New Project
  Provide a name for your new project, and select your Country/region from the drop-down menu.

  Under "Overview" area select:
    Add Firebase to your web app

  Firebase should respond with a pop-up modal window with credentials for this application where it will be placed in a api-key.ts file.

  Create a file under src/app: src/app/api-keys.ts
  Paste credentials below the export var masterFirebaseConfig line:

      export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };

  Add to ignore file:
    /src/app/api-keys.ts


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Background Images From

https://www.pexels.com/search/wide/

## Features To Add

  * Additional Page Info/Content
  * Filtering front Page
  * Additional Page Styling
  * Deploying Application
  * User Authentication
  * Protecting Routes
  * Route Guard
