---
sidebar_label: Integration with Svelte
title: Svelte Integration
description: You can learn about the Svelte integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** to use this documentation. If you are not, please refer to the [**Svelte documentation**](https://svelte.dev/) for a getting-started tutorial.
:::

DHTMLX Spreadsheet is compatible with **Svelte**. We have prepared code examples of how to use DHTMLX Spreadsheet with **Svelte**. To check online samples, please refer to the corresponding [**Examples on CodeSandbox**](https://codesandbox.io/u/DHTMLX).

<iframe src="https://codesandbox.io/p/devbox/dhtmlx-spreadsheet-with-svelte-wt5v34?file=%2Fsrc%2FSpreadsheet.svelte" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

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

There are two options available: you can install the **Pro** package from a local folder or install the **trial** version using `npm` or `yarn`.

#### Installing the package from a local folder

The instructions are the following:

1. Copy the Spreadsheet package into some local directory.
2. In the project directory run the command below replacing *spreadsheet-local-package-path* with the actual path, e.g.:

~~~
npm install ./spreadsheet_5.1.0_enterprise
// or
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

Now we should create a Svelte component, to add a Spreadsheet into the application. Let's create a new file in the ***src/*** directory and name it ***Spreadsheet.svelte***.

#### Importing source files

Open the file and import Spreadsheet source files. Note that:

- if you've [installed the Spreadsheet package from a local folder](#installing-the-package-from-a-local-folder), your import paths will look like this:

~~~
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
~~~

- if you've chosen to [install the trial version](#installing-the-trial-version-via-a-package-manager), the import paths should be as in:

~~~
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
~~~

In this tutorial we will use the trial version of Spreadsheet.

#### Setting the container and adding Spreadsheet

To display Spreadsheet on the page, we need to set the container to render the component inside. Check the code below:

~~~html {5,8} title="Spreadsheet.svelte"
<script>
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"
    
    let container;
</script>

<div bind:this={container}></div>
~~~

Then we need to render our Spreadsheet in the container. To do that, use the `onMount()` method of Svelte:

~~~html {4,9-11} title="Spreadsheet.svelte"
<script>
  import { Spreadsheet } from "@dhx/trial-spreadsheet";
  import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";
  import { onMount } from "svelte";

  let spreadsheet;
  let container;

  onMount(() => {
    spreadsheet = new Spreadsheet(container,{});
  });

</script>

<div bind:this={container}></div>
~~~

#### Loading data

To add data into the Spreadsheet, we need to provide a data set. Let's create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~js title="data.js"
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

~~~js title="Spreadsheet.svelte"
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
