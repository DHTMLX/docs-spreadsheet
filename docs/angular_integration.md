---
sidebar_label: Integration with Angular
title: Angular Integration
description: You can learn about the Angular integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Angular

You can use DHTMLX Spreadsheet in an application created with the [Angular](https://angular.io/) framework. 

:::tip 
[Check the demo on CodeSandbox](https://codesandbox.io/p/devbox/dhtmlx-spreadsheet-angular-7xnzr9).
:::

## Preparations

You will need [Angular CLI](https://angular.io/cli) and [Node.js](https://nodejs.org/en/) to create a project, so you should install them, if haven't done it before.

## Creating a project

Create a new Angular project called **my-angular-spreadsheet-app** using Angular CLI. Run the following command for this purpose:

~~~
ng new my-angular-spreadsheet-app
~~~

The above command will install all the necessary tools and dependencies, so you don't need any additional commands. After that, go to the app directory by running: 

~~~
cd my-angular-spreadsheet-app
~~~

To start the server run: 

~~~
yarn start
~~~

after that the app should run on `http://localhost:4200`.

![Angular app running](assets/integrations/angular_app_run.png) 


## Adding DHTMLX Spreadsheet

Now we should get the DHTMLX Spreadsheet code. First of all, we need to stop the app by pressing **Ctrl+C** in the command line.

### Package installation

You can either copy the package locally or install the trial version from npm.

#### Installing the package from a local folder

Follow the instructions below:

1. Copy the Spreadsheet package into some local directory
2. Go to your project directory
3. Run the following command, replacing *spreadsheet-local-package-path* with the actual path, e.g.:

~~~
npm install ./spreadsheet_5.1.0_enterprise
~~~

#### Installing the trial version from npm

You can install the **trial** version of Spreadsheet from npm as in:

~~~
npm install @dhx/trial-spreadsheet
~~~

### Creating a Spreadsheet Component

Now we should create a component, to add a Spreadsheet into the application. Let's create a new file and call it **spreadsheetcomponent.ts** and add the following code into it:

~~~js title="spreadsheetcomponent.ts"
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
import { Spreadsheet } from 'dhx-spreadsheet-package';

@Component({
  selector: 'app-spreadsheet',
  template: '<div #spreadsheetContainer></div>',
})
export class SpreadsheetComponent implements OnInit {
  @ViewChild('spreadsheetContainer', { static: true }) spreadsheetContainer!: ElementRef;

  private spreadsheet: Spreadsheet;

  ngOnInit() {
    this.spreadsheet = new Spreadsheet(this.spreadsheetContainer.nativeElement);
  }

  ngOnDestroy() {
    this.spreadsheet?.destructor();
  }
}
~~~

In the above code we've created a container to render the component inside. To render our Spreadsheet in the node, we've used the `ngOnInit()` method of Angular. The `ngOnDestroy()` method contains the `spreadsheet.destructor()` call that will clear the component when it is no longer needed.

### Loading data

To add data into Spreadsheet we'll add the `spreadsheet.parse(getData());` line into the `ngOnInit()` method, as shown below. It will reload data on each applied change.

~~~js title="spreadsheetcomponent.ts"
ngOnInit() {
  let spreadsheet = new Spreadsheet(
    this.spreadsheetContainer.nativeElement,
    {},
  );
  spreadsheet.parse(getData());
}
~~~

Now the Spreadsheet component is ready. When the element will be added to the page, it will initialize the Spreadsheet object with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/properties_overview.md) to check the full list of available properties.

### Using Spreadsheet Component in App Component

Open **app.component.ts** and use *SpreadsheetComponent* instead of the default content in the following way:

~~~js title="app.component.ts"
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<spreadsheet />`,
})
export class AppComponent {
  name = "";
}
~~~

Then open **app.module.ts** and insert the Spreadsheet component like this:

~~~js title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpreadsheetComponent } from "./spreadsheet/spreadsheet.component";

@NgModule({
  declarations: [AppComponent, SpreadsheetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
~~~

## Event Handling

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](spreadsheet/api/overview/events_overview.md).

Open the **spreadsheet.component.ts** file and complete the `ngOnInit()`` method as in:

~~~js {7-9} title="spreadsheetcomponent.ts"
ngOnInit() {
  let spreadsheet = new Spreadsheet(
    this.spreadsheetContainer.nativeElement,
    {},
  );
  spreadsheet.parse(getData());
  spreadsheet.events.on('ActionName', () => {
    // do something
  });
}
~~~

Replace `'ActionName'` with the actual event name you want to handle, and implement the corresponding code inside the callback function. Get more information about the work with events in the [Event Handling](spreadsheet/handling_events.md) article.

Now you should have a basic setup for integrating DHTMLX Spreadsheet with Angular using Angular CLI. You can customize the code according to your specific requirements.



