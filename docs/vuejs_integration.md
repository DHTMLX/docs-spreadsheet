---
sidebar_label: Integration with Vue
title: Vue Integration
description: You can learn about the Vue integration of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Integration with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://v3.vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Spreadsheet is compatible with **Vue**. We have prepared code examples on how to use DHTMLX Spreadsheet with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-spreadsheet-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-spreadsheet-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Creating Spreadsheet

Now you should get the DHTMLX Spreadsheet source code. First of all, stop the app and proceed with installing the Spreadsheet package.

### Step 1. Package installation

Download the [**trial Spreadsheet package**](/how_to_start/#installing-spreadsheet-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Spreadsheet is available 30 days only.

### Step 2. Component creation

Now you need to create a Vue component, to add Spreadsheet into the application. Create a new file in the ***src/components/*** directory and name it ***Spreadsheet.vue***.

#### Import source files

Open the ***Spreadsheet.vue*** file and import Spreadsheet source files. Note that:

- if you use PRO version and install the Spreadsheet package from a local folder, the import paths look like this:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **spreadsheet.min.css**.

- if you use the trial version of Spreadsheet, specify the following paths:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of Spreadsheet.

#### Setting the container and adding Spreadsheet

To display Spreadsheet on the page, you need to create the container for Spreadsheet, and initialize this component using the corresponding constructor:

~~~html {2,7-8,18} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    mounted() {
        // initialize the Spreadsheet component
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    },

    unmounted() {
        this.spreadsheet.destructor(); // destruct Spreadsheet
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Adding styles

To display Spreadsheet correctly, you need to provide the corresponding styles. You can use any **.css** file to specify important styles for Spreadsheet and its container:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root { /* make sure that you use the #root container */
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

To add data into the Spreadsheet, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx title="data.js"
export function getData() {
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

Then open the ***App.vue*** file, import data, and initialize it via the inner `data()` method. After this you can pass data into the new created `<Spreadsheet/>` component as **props**:

~~~html {3,7-9,14} title="App.vue"
<script>
import Spreadsheet from "./components/Spreadsheet.vue";
import { getData } from "./data";

export default {
    components: { Spreadsheet },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <Spreadsheet :data="data" />
</template>

~~~

Go to the ***Spreadsheet.vue*** file and apply the passed **props** to the Spreadsheet via the [`parse()`](/api/spreadsheet_parse_method/) method:

~~~html {6,10} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    props: ["data"],

    mounted() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
        this.spreadsheet.parse(this.data);
    },

    unmounted() {
        this.spreadsheet.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

The `parse(data)` method provides data reloading on each applied change.

Now the Spreadsheet component is ready to use. When the element will be added to the page, it will initialize the Spreadsheet with data. You can provide necessary configuration settings as well. Visit our [Spreadsheet API docs](spreadsheet/api/overview/properties_overview.md) to check the full list of available properties.

#### Handling events

When a user makes some action in the Spreadsheet, it invokes an event. You can use these events to detect the action and run the desired code for it. See the [full list of events](spreadsheet/api/overview/events_overview.md).

Open ***Spreadsheet.vue*** and complete the `mounted()` method:

~~~html {8-11} title="Spreadsheet.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});

        this.spreadsheet.events.on("afterFocusSet", function(cell){
            console.log("Focus is set on a cell");
            console.log(cell);
        });
    }
    //...
}   
</script>

<!--...-->
~~~

### Step 3. Adding Spreadsheet into the app

To add the component into the app, open the **App.vue** file and replace the default code with the following one:

~~~html title="App.vue"
<script>
import Spreadsheet from "./components/Spreadsheet.vue";
import { getData } from "./data";

export default {
    components: { Spreadsheet },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <Spreadsheet :data="data" />
</template>

~~~

After that, you can start the app to see Spreadsheet loaded with data on a page.

![Spreadsheet initialization](assets/integrations/trial_spreadsheet.png)

Now you know how to integrate DHTMLX Spreadsheet with Vue. You can customize the code according to your specific requirements. The final example you can find on [**GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).
