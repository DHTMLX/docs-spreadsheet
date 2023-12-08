---
sidebar_label: Integration with Angular
title: Angular Integration
description: You can learn about the Angular integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Angular

:::tip
You should be familiar with the basic concepts and patterns of **Angular** to use this documentation. If you are not, please refer to the [**Angular documentation**](https://angular.io/docs) for a getting-started tutorial.
:::

DHTMLX Spreadsheet is compatible with **Angular**. We have prepared code examples of how to use DHTMLX Spreadsheet with **Angular**. To check online samples, please refer to the corresponding [**Examples on CodeSandbox**](https://codesandbox.io/u/DHTMLX).

<iframe src="https://codesandbox.io/p/devbox/dhtmlx-spreadsheet-with-angular-7xnzr9?file=%2Fsrc%2Fapp%2Fspreadsheet%2Fspreadsheet.component.ts" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-spreadsheet-app** project using Angular CLI. Run the following command for this purpose:

~~~
ng new my-angular-spreadsheet-app
~~~

The above command will install all the necessary tools and dependencies, so you don't need any additional commands. 

### Installation of dependencies

After that, go to the app directory: 

~~~
cd my-angular-spreadsheet-app
~~~

Then, run the app with the following command:

~~~
yarn start
~~~

After that, the app should run on `http://localhost:4200`.

![Angular app running](assets/integrations/angular_app_run.png) 

## Creating Spreadsheet

Now we should get the DHTMLX Spreadsheet code. First of all, we need to stop the app by pressing **Ctrl+C** in the command line. Then we can proceed with installing the Spreadsheet package.

### Step 1. Package installation

There are two options available: you can install the **Pro** package from a local folder or install the **trial** version using `npm` or `yarn`.

#### Installing the package from a local folder

1. Copy the Spreadsheet package into some local directory.
2. In the project directory run the command below replacing *spreadsheet-local-package-path* with the actual path, e.g.:

~~~
npm install ./spreadsheet_5.1.0_enterprise
//or
yarn add "./spreadsheet_5.1.0_enterprise"
~~~

#### Installing the trial version via a package manager

You can install the **trial** version of Spreadsheet using **npm** or **yarn** commands:

~~~js {2,3,6,7}
// npm
npm config set @dhx:registry https://npm.dhtmlx.com
npm i @dhx/trial-spreadsheet

// yarn
yarn config set @dhx:registry https://npm.dhtmlx.com
yarn add @dhx/trial-spreadsheet
~~~

To get Spreadsheet under the proprietary license, refer to the [Support Center](https://dhtmlx.com/docs/technical-support.shtml)!
  
### Step 2. Component creation

Now we should create a component, to add a Spreadsheet into the application. Let's create  the **spreadsheet** folder in the **src/app/** directory, add a new file into it and call it **spreadsheet.component.ts**. Then complete the steps described below.

#### Importing source files

Open the file and import Spreadsheet source files. Note that:

- if you've [installed the Spreadsheet package from a local folder](#installing-the-package-from-a-local-folder), your import paths will look like this:

~~~
import { Spreadsheet } from 'dhx-spreadsheet-package';
import from 'dhx-spreadsheet-package/codebase/spreadsheet.css';
~~~

- if you've chosen to [install the trial version](#installing-the-trial-version-via-a-package-manager), the import paths should be as in:

~~~
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
~~~

In this tutorial we will use the trial version of Spreadsheet.

#### Setting the container and adding Spreadsheet

To display Spreadsheet on the page, we need to set the container to render the component inside. Use the code below:

~~~js title="spreadsheet.component.ts"
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'spreadsheet',
  template: '<div #spreadsheetContainer></div>',
})
export class SpreadsheetComponent implements OnInit {
  @ViewChild('spreadsheetContainer', { static: true }) spreadsheetContainer!: ElementRef;

  private spreadsheet!: Spreadsheet;
}
~~~

Then we need to render our Spreadsheet in the container. To do that, use the `ngOnInit()` method of Svelte:

~~~js {6-8} title="spreadsheet.component.ts"
export class SpreadsheetComponent implements OnInit {
  @ViewChild('spreadsheetContainer', { static: true }) spreadsheetContainer!: ElementRef;

  private spreadsheet!: Spreadsheet;

  ngOnInit() {
    this.spreadsheet = new Spreadsheet(this.spreadsheetContainer.nativeElement,{});
  }

  ngOnDestroy() {
    this.spreadsheet?.destructor();
  }
}
~~~

In the above code we've also specified the `ngOnDestroy()` method that contains the `spreadsheet.destructor()` call to clear the component when it is no longer needed.

#### Loading data

To add data into the Spreadsheet, we need to provide a data set. Let's create the **data.ts** file in the **src/app/spreadsheet/** directory and add some data into it:

~~~js title="data.ts"
export function getData(): any {
  return {
    styles: {
      bold: {
          "font-weight": "bold",
      },
      right: {
          "justify-content": "flex-end",
          "text-align": "right",
      },
    },
    data: [
      { cell: "a1", value: "Country", css:"bold" },
      { cell: "b1", value: "Product", css:"bold" },
      { cell: "c1", value: "Price", css:"right bold" },
      { cell: "d1", value: "Amount", css:"right bold" },
      { cell: "e1", value: "Total Price", css:"right bold" },

      { cell: "a2", value: "Ecuador" },
      { cell: "b2", value: "Banana" },
      { cell: "c2", value: 6.68, format: "currency" },
      { cell: "d2", value: 430 },
      { cell: "e2", value: 2872.4, format: "currency" },

      { cell: "a3", value: "Belarus" },
      { cell: "b3", value: "Apple" },
      { cell: "c3", value: 3.75, format: "currency" },
      { cell: "d3", value: 600 },
      { cell: "e3", value: 2250, format: "currency" },

      { cell: "a4", value: "Peru" },
      { cell: "b4", value: "Grapes" },
      { cell: "c4", value: 7.69, format: "currency" },
      { cell: "d4", value: 740 },
      { cell: "e4", value: 5690.6, format: "currency" },

      // more cells with data
    ],
  };
}
~~~

Then open the ***spreadsheet.component.ts*** file. Import the file with data and add the `spreadsheet.parse();` call into the `ngOnInit()` method, as shown below. It will reload data on each applied change.

~~~js {1,8} title="spreadsheet.component.ts"
// importing the data file
import { getData } from './data';

ngOnInit() {
  this.spreadsheet = new Spreadsheet(this.spreadsheetContainer.nativeElement,{});
  // adding spreadsheet.parse() into `ngOnInit()` 
  this.spreadsheet.parse(getData());
}
~~~

Now the Spreadsheet component is ready. When the element will be added to the page, it will initialize the Spreadsheet object with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/properties_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](spreadsheet/api/overview/events_overview.md).

Open the **spreadsheet.component.ts** file and complete the `ngOnInit()` method as in:

~~~js {5-7} title="spreadsheet.component.ts"
ngOnInit() {
  this.spreadsheet = new Spreadsheet(this.spreadsheetContainer.nativeElement,{});

  this.spreadsheet.parse(getData());
  this.spreadsheet.events.on('ActionName', () => {
    // do something
  });
}
~~~

Replace `'ActionName'` with the actual name of the event you want to handle, and implement the corresponding code inside the callback function. Get more information about the work with events in the [Event Handling](spreadsheet/handling_events.md) article.

### Step 3. Adding Spreadsheet into the app

Now it's time to add the component into our app. Open ***src/app/app.component.ts*** and use *SpreadsheetComponent* instead of the default content by inserting the code below:

~~~js title="app.component.ts"
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<spreadsheet></spreadsheet>`,
})
export class AppComponent {
  name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and insert the *SpreadsheetComponent* as provided below:

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

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~js title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
~~~

After that, when we start the app, we should see Spreadsheet loaded with data on a page.

![Spreadsheet initialization](assets/integrations/svelte_spreadsheet_init.png)

Now you should have a basic setup for integrating DHTMLX Spreadsheet with Angular using Angular CLI. You can customize the code according to your specific requirements.
