---
sidebar_label: Integration with Angular
title: Angular Integration
description: You can learn about the Angular integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Angular

:::tip
You should be familiar with the basic concepts and patterns of **Angular** to use this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Spreadsheet is compatible with **Angular**. We have prepared code examples on how to use DHTMLX Spreadsheet with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-spreadsheet-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-spreadsheet-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app!
:::

The command above installs all the necessary tools, so you don't need to run any additional commands.

### Installation of dependencies

After that, go to the app directory:

~~~json
cd my-angular-spreadsheet-app
~~~

Install dependencies and start the dev server. For this, use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Spreadsheet

Now you should get the DHTMLX Spreadsheet source code. First of all, stop the app and proceed with installing the Spreadsheet package.

### Step 1. Package installation

Download the [**trial Spreadsheet package**](/how_to_start/#installing-spreadsheet-via-npm-or-yarn) and follow steps mentioned in the README file. Note that trial Spreadsheet is available 30 days only.
  
### Step 2. Component creation

Now you need to create an Angular component, to add Spreadsheet into the application. Create  the **spreadsheet** folder in the **src/app/** directory, add a new file into it and name it **spreadsheet.component.ts**. Then complete the steps described below.

#### Importing source files

Open the file and import Spreadsheet source files. Note that:

- if you use PRO version and install the Spreadsheet package from a local folder, the imported path looks like this:

~~~jsx
import { Spreadsheet } from 'dhx-spreadsheet-package';
~~~

- if you use the trial version of Spreadsheet, specify the following path:

~~~jsx
import { Spreadsheet } from '@dhx/trial-spreadsheet';
~~~

In this tutorial you can see how to configure the **trial** version of Spreadsheet.

#### Set the container and initialize Spreadsheet

To display Spreadsheet on the page, you need to set the container to render the component inside and initialize Spreadsheet using the corresponding constructor:

~~~jsx {1,8,12-13,18-19} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', // a template name used in the "app.component.ts" file as <spreadsheet/>
    styleUrls: ['./spreadsheet.component.css'], // include a css file
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    // initialize container for Spreadsheet
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        // initialize the Spreadsheet component
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
    }

    ngOnDestroy() {
        this._spreadsheet.destructor(); // destruct Spreadsheet
    }
}
~~~

#### Adding styles

To display Spreadsheet correctly, you need to provide the corresponding styles. For this purpose, you can create the **spreadsheet.component.css** file in the **src/app/spreadsheet/** directory and specify important styles for Spreadsheet and its container:

~~~css title="spreadsheet.component.css"
/* import Spreadsheet styles */
@import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

/* specify styles for initial page */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for the Spreadsheet container */
.widget {
    height: 100%;
}
~~~

#### Loading data

To add data into Spreadsheet, you need to provide a data set. You can create the **data.ts** file in the **src/app/spreadsheet/** directory and add some data into it:

~~~jsx title="data.ts"
export function getData(): any {
    return {
        styles: {
            bold: {
                "font-weight": "bold"
            },
            right: {
                "justify-content": "flex-end",
                "text-align": "right"
            }
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
        ]
    }
}
~~~

Then open the ***spreadsheet.component.ts*** file. Import the file with data and apply it using the [`parse()`](/api/spreadsheet_parse_method/) method within the `ngOnInit()` method, as shown below.

~~~jsx {2,18,21} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data"; // import data
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', 
    styleUrls: ['./spreadsheet.component.css'],
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        const data = getData(); // initialize data property
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
        
        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
~~~

Now the Spreadsheet component is ready to use. When the element will be added to the page, it will initialize the Spreadsheet with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/events_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](/spreadsheet/api/overview/events_overview/).

Open the **spreadsheet.component.ts** file and complete the `ngOnInit()` method as in:

~~~jsx {5-8} title="spreadsheet.component.ts"
// ...
ngOnInit() {
    this._spreadsheet = new Spreadsheet(this.spreadsheet_container.nativeElement,{});

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
}

ngOnDestroy() {
    this._spreadsheet.destructor();
}
~~~

### Step 3. Adding Spreadsheet into the app

To add the ***SpreadsheetComponent*** component into the app, open the ***src/app/app.component.ts*** file and replace the default code with the following one:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<spreadsheet/>` // a template created in the "spreadsheet.component.ts" file 
})
export class AppComponent {
    name = "";
}
~~~

Then create the ***app.module.ts*** file in the ***src/app/*** directory and specify the *SpreadsheetComponent* as shown below:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpreadsheetComponent } from "./spreadsheet/spreadsheet.component";

@NgModule({
    declarations: [AppComponent, SpreadsheetComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

The last step is to open the ***src/main.ts*** file and replace the existing code with the following one:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

After that, you can start the app to see Spreadsheet loaded with data on a page.

![Spreadsheet initialization](assets/integrations/trial_spreadsheet.png)

Now you know how to integrate DHTMLX Spreadsheet with Angular. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).
