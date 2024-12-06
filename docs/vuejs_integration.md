---
sidebar_label: Integration with Vue.js
title: Vue.js Integration
description: You can learn about the Vue.js integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---
# Integration with Vue.js

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) to use this documentation. If you are not, please refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started) for a getting-started tutorial.
:::

DHTMLX Spreadsheet is compatible with **Vue**. We have prepared code examples of how to use DHTMLX Spreadsheet with **Vue**. To check online samples, please refer to the corresponding [**Example on Replit**](https://replit.com/@dhtmlx/dhtmlx-spreadsheet-with-vue3).

You can also [check the demo on GitHub](https://github.com/DHTMLX/vue-spreadsheet-demo).

## Creating a project

:::info
Before you start to create a new project, install [Node.js](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~
npm create vue@latest
~~~

This command will install and execute `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

### Installation of dependencies

Next you should go to the app directory. Let's name our project **spreadsheet-vue** and run:

~~~
cd spreadsheet-vue
~~~

After that you should install dependencies and start the dev server. For this, you need to make use of a package manager:

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

You should now have your **Vue** project running on `http://localhost:5173`.

![Vue app running](assets/integrations/vue_app_run.png) 

## Creating Spreadsheet

Now we should get the DHTMLX Spreadsheet code. First of all, we need to stop the app by pressing **Ctrl+C** in the command line. Then we can proceed with installing the Spreadsheet package.

### Step 1. Package installation

Download the [**trial Spreadsheet package**](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and follow the steps mentioned in the *README* file. Note that the trial Spreadsheet is available 30 days only.

Check the [How to Start](/spreadsheet/how_to_start/) guide to learn about the available installation ways. 

### Step 2. Component creation

Now we should create a Vue component, to add a Spreadsheet into the application. Let's create a new file in the ***src/components/*** directory and name it ***Spreadsheet.vue***. 

#### Importing source files

Open the file and import Spreadsheet source files. Note that:

- if you've installed the Spreadsheet package from a local folder, your import paths will look like this:

~~~html title="Spreadsheet.vue"
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **spreadsheet.min.css**.

{{note 
**In case you use *npm* with a local Spreadsheet package**, the way of importing Spreadsheet source files is different. [Check the details below](#using-npm-with-spreadsheet-package)
}}

- if you've chosen to install the trial version, the import paths should be as in:

~~~html title="Spreadsheet.vue"
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
~~~

In this tutorial we will use the **trial** version of Spreadsheet.

#### Setting the container and adding Spreadsheet

To display Spreadsheet on the page, we need to set the container to render the component inside. Check the code below:

~~~html {6-8} title="Spreadsheet.vue"
<script>
  import { Spreadsheet } from "@dhx/trial-spreadsheet";
  import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";
</script>

<template>
  <div ref="container" style="width: 100%; height: 80vh; "></div>
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

<template>
  <div ref="container" style="width: 100%; height: 80vh; "></div>
</template>
~~~

{{note 
**In case you use *npm* with a local Spreadsheet package**, the way of Spreadsheet initialization differs a little bit. [Check the details below](#using-npm-with-spreadsheet-package)
}}

To clear the component as it has unmounted, use the `spreadsheet.destructor()` call and remove the container after that inside the `unmounted()` method of ***Vue.js***, as follows:

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

<template>
  <div ref="container" style="width: 100%; height: 80vh; "></div>
</template>
~~~

#### Using npm with Spreadsheet package

If you use **npm with a Spreadsheet package**, the import of the source files and the initialization of Spreadsheet will differ from the common way:

- include the Spreadsheet source files in the ***index.html*** file as shown in the example below. Replace *spreadsheet_package* with the name of your local folder that contains Spreadsheet source files:

~~~html title="index.html"
<script src="./spreadsheet_package/codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="./spreadsheet_package/codebase/spreadsheet.css">
~~~

- use the **dhx** prefix to initialize Spreadsheet, check the example below:

~~~html {4} title="Spreadsheet.vue"
<script>
export default {
    mounted: function() {
      this.spreadsheet = new dhx.Spreadsheet(this.$refs.container, {});
    }
  };
</script>
~~~

#### Loading data

Next you can load data into the Spreadsheet. For this, you need to provide a data set. Create the ***data.js*** file in the ***src/*** directory and add some data into it:

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

Then open the ***Spreadsheet.vue*** file and use the `spreadsheet.parse()` method to load data. It will reload data on each applied change:

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

Open ***Spreadsheet.vue*** and complete the `mounted()` method:

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

Now it's time to add the component into our app. Open ***App.vue*** and replace the code with the following one:

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
