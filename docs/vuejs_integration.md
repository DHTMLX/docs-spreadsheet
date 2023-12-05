---
sidebar_label: Integration with Vue.js
title: Vue.js Integration
description: You can learn about the Vue.js integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Vue.js

You can use DHTMLX Spreadsheet in an application created with the [Vue.js](https://vuejs.org/) framework. 

:::tip 
[Check the demo on CodeSandbox](https://codesandbox.io/p/sandbox/dhtmlx-spreadsheet-with-vue3-c75m2t).
:::

## Preparations

You will need [Node.js](https://nodejs.org/en/) to create a project, so you should install it, if haven't done it before.

## Creating a project

To create a Vue project, run the following command: 

~~~
npm create vue@latest
~~~

This command will install and execute `create-vue`, the official Vue project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

### Installation of dependencies

Next you should go to the app directory. Let's call our project **spreadsheet-vue** and run:

~~~
cd spreadsheet-vue
~~~

After that you should install dependencies and start the dev server. For this, you need to make use of a package manager:

- if you use [yarn](https://yarnpkg.com/), you need to call the following commands:

~~~
yarn install
yarn dev
~~~

- if you use [npm](https://www.npmjs.com/), you need to call the following commands:

~~~
npm install
npm run dev
~~~

You should now have your Vue project running on `http://localhost:5173`.

![Vue app running](assets/integrations/vue_app_run.png) 

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

//or
yarn add "./spreadsheet_5.1.0_enterprise"
~~~

#### Installing the trial version via a package manager

You can install the **trial** version of Spreadsheet using **npm** or **yarn** commands:

~~~js {2,3,6,7}
// npm
npm config set @dhx:registry https://npm.dhtmlx.com
npm i @dhx/trial-spreadsheet

//yarn
yarn config set @dhx:registry https://npm.dhtmlx.com
yarn add @dhx/trial-spreadsheet
~~~

To get Spreadsheet under the proprietary license, refer to the [Support Center](https://dhtmlx.com/docs/technical-support.shtml?_gl=1*18ffotg*_ga*MTA3MDMxMTAxNi4xNzAwNTcxNzU4*_ga_N87XPB4GSG*MTcwMTQzMjczMS4yOS4xLjE3MDE0MzI3OTUuNTYuMC4w&_ga=2.77564829.902258312.1701098802-1070311016.1700571758)!

### Step 2. Component creation

Now we should create a Svelte component, to add a Spreadsheet into the application. Let's create a new file in the **src/components/** directory and name it **Spreadsheet.vue**. 

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

To display Spreadsheet on the page, we need to set the container to render the component inside. Check the code below:

~~~html {6-8} title="Spreadsheet.vue"
<script>
  import { Spreadsheet } from "@dhx/trial-spreadsheet";
  import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";
</script>

<template>
	<div ref="container"></div>
</template>
~~~

Then we need to render our Spreadsheet in the container. Use the `new Spreadsheet()` constructor inside the `mounted()` method of Vue.js to initialize Spreadsheet inside of the container that you've set above:

~~~html title="Spreadsheet.vue"
<script>
export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {});
  }
};
</script>
~~~

To clear the component as it has unmounted, use the `spreadsheet.destructor()` call and remove the container after that inside the `unmounted()` method of Vue.js, as follows:

~~~html {7-10} title="Spreadsheet.vue"
<script>
export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {});
  },

  unmounted() {
    this.spreadsheet.destructor();
    this.$refs.container.innerHTML = "";
  },
}
</script>
~~~

#### Loading data

Next you can load data into the Spreadsheet. For this, you need to provide a data set. Create the **data.js** file in the **src/** directory and add some data into it:

~~~js title="data.js"
export function getData() {
  return {
    sheets: [
      {
        name: "Boolean",
        data: [
          {
            cell: "A1",
            css: "header",
            format: "common",
            value: "Formula name",
          },
          {
            cell: "B1",
            css: "header",
            format: "common",
            value: "Formula example",
          },
          {
            cell: "C1",
            css: "header",
            format: "common",
            value: "Data for formula",
          },
          {
            cell: "A3",
            css: "highlighting",
            format: "common",
            value: "Equal to",
          },
          {
            cell: "B3",
            format: "common",
            value: "=C3=D3",
          },
          {
            cell: "C3",
            format: "number",
            value: 5,
          },
          {
            cell: "A4",
            css: "highlighting",
            format: "common",
            value: "Greater than",
          },
          {
            cell: "B4",
            format: "common",
            value: "=C4>D4",
          },
          {
            cell: "C4",
            format: "number",
            value: 7,
          },
          // more cells
        ],
        cols: [
          {
            width: 180,
          },
        ],
        rows: [],
      }
    ]
  }
}
~~~

Then open the **Spreadsheet.vue** file and use the **spreadsheet.parse()** method to load data. It will reload data on each applied change:

~~~html {5} title="Spreadsheet.vue"
<script>
export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    this.spreadsheet.parse(data);
  }
}
</script>
~~~

Now the Spreadsheet component is ready. When the element will be added to the page, it will initialize the Spreadsheet object with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/properties_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](spreadsheet/api/overview/events_overview.md).

Open **Spreadsheet.vue** and complete the `mounted()` method as in:

~~~html {5} title="Spreadsheet.vue"
<script>
export default {
    mounted: function() {
      this.spreadsheet = new Spreadsheet(this.$refs.container, {});
      this.spreadsheet.events.on("ActionName", () => {do something});
    }
}
</script>
~~~

Replace `'ActionName'` with the actual event name you want to handle, and implement the corresponding code inside the callback function. Get more information about the work with events in the [Event Handling](spreadsheet/handling_events.md) article.

### Step 3. Adding Spreadsheet into the app

Now it's time to add the component into our app. Open **App.vue** and replace the code with the following one:

~~~html title="App.vue"
<script>
import Spreadsheet from "./components/Spreadsheet.vue";
import { getData } from "./data";

export default {
  components: { Spreadsheet },
  data() {
    return { data: getData() };
  },
};
</script>

<template>
  <Spreadsheet :data="data" />
</template>
~~~

After that, when we start the app, we should see Spreadsheet loaded with data on a page.

![Spreadsheet initialization](assets/integrations/svelte_spreadsheet_init.png) 

Now you should have a basic setup for integrating DHTMLX Spreadsheet with Vue.js. You can customize the code according to your specific requirements.




