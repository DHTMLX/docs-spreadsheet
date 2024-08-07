---
sidebar_label: Integration with Svelte
title: Svelte Integration
description: You can learn about the Svelte integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** to use this documentation. If you are not, please refer to the [**Svelte documentation**](https://svelte.dev/) for a getting-started tutorial.
:::

DHTMLX Spreadsheet is compatible with **Svelte**. We have prepared code examples of how to use DHTMLX Spreadsheet with **Svelte**. To check online samples, please refer to the corresponding [**Example on Replit**](https://replit.com/@dhtmlx/dhtmlx-spreadsheet-with-svelte).

You can also [check the demo on GitHub](https://github.com/DHTMLX/svelte-spreadsheet-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vitejs.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit): 

~~~
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Independent of the chosen way, next you should go to the app directory. Let's call our project **spreadsheet-svelte** and run:

~~~
cd spreadsheet-svelte
~~~

Then you need to install dependencies and run the app. For this, you need to make use of a package manager:

- if you use [**yarn**](https://yarnpkg.com/), you need to call the following commands:

~~~
yarn install
yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), you need to call the following commands:

~~~
npm install
npm run dev
~~~

After the above steps are complete, the app should run on `http://localhost:5173`.

![Svelte app running](assets/integrations/svelte_app_run.png) 

## Creating Spreadsheet

Now we should get the DHTMLX Spreadsheet code. First of all, we need to stop the app by pressing **Ctrl+C** in the command line. Then we can proceed with installing the Spreadsheet package.

### Step 1. Package installation

Download the [**trial Spreadsheet package**](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and follow the steps mentioned in the *README* file. Note that the trial Spreadsheet is available 30 days only.

Check the [How to Start](/spreadsheet/how_to_start/) guide to learn about the available installation ways. 

### Step 2. Component creation

Now we should create a Svelte component, to add a Spreadsheet into the application. Let's create a new file in the ***src/*** directory and name it ***Spreadsheet.svelte***.

#### Importing source files

Open the file and import Spreadsheet source files. Note that:

- if you've installed the Spreadsheet package from a local folder, your import paths will look like this:

~~~html title="Spreadsheet.svelte" 
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **spreadsheet.min.css**.

{{note 
**In case you use *npm* with a local Spreadsheet package**, the way of importing Spreadsheet source files is different. [Check the details below](#using-npm-with-spreadsheet-package)
}}

- if you've chosen to install the trial version, the import paths should be as in:

~~~html title="Spreadsheet.svelte"
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
~~~

In this tutorial we will use the **trial** version of Spreadsheet.

#### Setting the container and adding Spreadsheet

To display Spreadsheet on the page, we need to set the container to render the component inside. Check the code below:

~~~html {5,8} title="Spreadsheet.svelte"
<script>
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"
    
    let container;
</script>

<div bind:this={container} class="container"></div>

<style>
    .container {
        width: 100%;
        height: 400px;
    }
</style>
~~~

Then we need to render our Spreadsheet in the container. To do that, use the `onMount()` method of Svelte. Inside the method you can also specify the **destructor()** method to remove the Spreadsheet instance, when it is no longer needed:

~~~html {4,9-12} title="Spreadsheet.svelte"
<script>
  import { Spreadsheet } from "@dhx/trial-spreadsheet";
  import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";
  import { onMount } from "svelte";

  let spreadsheet;
  let container;

  onMount(() => {
    spreadsheet = new Spreadsheet(container,{});
    return () => spreadsheet.destructor(); 
  });

</script>

<div bind:this={container} class="container"></div>
~~~

{{note 
**In case you use *npm* with a local Spreadsheet package**, the way of Spreadsheet initialization differs a little bit. [Check the details below](#using-npm-with-spreadsheet-package)
}}

#### Using npm with Spreadsheet package

If you use **npm with a Spreadsheet package**, the import of the source files and the initialization of Spreadsheet will differ from the common way:

- include the Spreadsheet source files in the ***index.html*** file as shown in the example below. Replace *spreadsheet_package* with the name of your local folder that contains Spreadsheet source files:

~~~html title="index.html"
<script src="./spreadsheet_package/codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="./spreadsheet_package/codebase/spreadsheet.css">
~~~

- use the **dhx** prefix to initialize Spreadsheet, check the example below:

~~~html {3} title="Spreadsheet.svelte"
<script>
  onMount(() => {
    spreadsheet = new dhx.Spreadsheet(container,{});
  });
</script>
~~~

#### Loading data

To add data into the Spreadsheet, we need to provide a data set. Let's create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx title="data.js"
export function getData() {
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
  }
}
~~~

Then open the ***Spreadsheet.svelte*** file, specify the line for data export and use the `parse()` method to load data:

~~~html {6,16} title="Spreadsheet.svelte"
<script>
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";
    import { onMount } from "svelte";
    
    export let data;

    let spreadsheet;
    let container;

    onMount(() => {
        spreadsheet = new Spreadsheet(container, {});
        spreadsheet.events.on("ActionName", () => {})
    });

    $: spreadsheet?.parse(data);
</script>

<div bind:this={container}></div>
~~~

The `$: spreadsheet?.parse(data);` line will provide data reloading on each applied change.

Now the Spreadsheet component is ready. When the element will be added to the page, it will initialize the Spreadsheet object with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/properties_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](spreadsheet/api/overview/events_overview.md).

Open ***Spreadsheet.svelte*** and complete the `onMount()` method as in:

~~~jsx title="Spreadsheet.svelte"
onMount(() => {
    spreadsheet = new Spreadsheet(container, {});
    spreadsheet.events.on("ActionName", () => {do something});
});
~~~

Replace `'ActionName'` with the actual name of the event you want to handle, and implement the corresponding code inside the callback function. Get more information about the work with events in the [Event Handling](spreadsheet/handling_events.md) article.

### Step 3. Adding Spreadsheet into the app

Now it's time to add the component into our app. Open ***App.svelte*** and replace the default code with the following one:

~~~html title="App.svelte"
<script>
  import Spreadsheet from "./Spreadsheet.svelte";
  import { getData } from "./data.js";
</script>

<Spreadsheet data={getData()} />
~~~

After that, when we start the app, we should see Spreadsheet loaded with data on a page.

![Spreadsheet initialization](assets/integrations/svelte_spreadsheet_init.png) 

Now you should have a basic setup for integrating DHTMLX Spreadsheet with Svelte. You can customize the code according to your specific requirements.
