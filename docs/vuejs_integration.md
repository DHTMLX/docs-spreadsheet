---
sidebar_label: Integration with Vue.js
title: JavaScript Spreadsheet - Integration with Vue.js
description: changetext
---

# Integration with Vue.js


You can use dhtmlxSpreadSheet in an application created with the [Vue.js](https://vuejs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/vuejs-widgets).

{{note Please note that the implementation provided below is not the only way to use dhtmlxSpreadSheet in a Vue.js-based application. It gives you initial schema of integration and implies further 
extension of the app functionality depending on your goals.}}

Including source files
-----------------

To add SpreadSheet package into your Vue.js-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) and unpack it into a folder of your project.

Then include **spreadsheet.js** and **spreadsheet.css** files into a page. 

The source files are represented in two versions: the **full** version and the **minified** one. Make sure that you set correct relative paths to these files:

{{snippet	index.html}}
~~~html
// full version
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">

// minified version
<script type="text/javascript" src="codebase/spreadsheet.min.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.min.css">
~~~

Initialization
-----------------

There are two possible scenarios of initializing SpreadSheet inside a Vue application. One consists in isolating SpreadSheet structure and data inside of the Vue component and another one suggests 
separating view and data parts with the possibility of interaction between them.

###Scenario 1. Isolating SpreadSheet in a Vue component

In this variant SpreadSheet configuration and data are held inside of the Vie component with no bonds with the external part of the application. 

####SpreadSheet initialization

- Create a *SpreadSheet.vue* file and add a container for SpreadSheet inside the **&lt;template&gt;&lt;/template&gt;** tags. Define the name of the container in the **ref** attribute:

{{snippet SpreadSheet.vue}}
~~~js
<template>
	<div ref="container" class="widget-box"></div>
</template>
~~~

- Define the JS part of the Vue component and use the `new SpreadSheet` constructor to initialize SpreadSheet inside of the container that you've set above: 

{{snippet SpreadSheet.vue}}
~~~js
<script>
export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      toolbar: ["columns","rows"],
    });
  }
};
</script>
~~~

####Loading data and changing config

- Next you can load data into the SpreadSheet and do some actions, e.g. change style of a cell:

{{snippet SpreadSheet.vue}}
~~~js
<script>
export default {
    mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      editLine: false
    });
    this.spreadsheet.parse([
      { cell: "A1", value: 10 },
      { cell: "B1", value: 20 }
    ]);
    this.spreadsheet.setStyle("A1", { background: "#F4D679" });
  }
}
</script>
~~~


###Scenario 2. Exposing SpreadSheet data and config 

This variant adds flexibility in the control over SpreadSheet data and configuration by allowing access to them from other parts of the application.

####SpreadSheet initialization

- The first step is the same. Create a file, let it be *SpreadSheet2.vue* this time, and add a container for the SpreadSheet inside the **&lt;template&gt;&lt;/template&gt;** tags:

{{snippet SpreadSheet2.vue}}
~~~js
<template>
	<div ref="container" class="widget-box"></div>
</template>
~~~

- Then initialize SpreadSheet with the `new SpreadSheet` constructor and define the configuration properties of SpreadSheet in the object passed as a second parameter of the constructor:

{{snippet SpreadSheet2.vue}}
~~~js
<script>
export default {
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      toolbar: this.toolbar,
      editLine: this.editLine,
      menu: this.menu,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount
    });
  }
}
</script>
~~~

####Working with configuration options

- Set the list of used SpreadSheet configuration properties and their types in the **props** configuration option:

{{snippet SpreadSheet2.vue}}
~~~js
<script>
export default {
  props: {
    toolbar: Array,
    editLine: { type: Boolean, default: true },
    menu: Boolean,
    rowsCount: Number,
    colsCount: Number
  },
  mounted: function() {
    this.spreadsheet = new Spreadsheet(this.$refs.container, {
      toolbar: this.toolbar,
      editLine: this.editLine,
      menu: this.menu,
      rowsCount: this.rowsCount,
      colsCount: this.colsCount
    });
  }
};
</script>
~~~

The properties of SpreadSheet are exposed and available to work with outside the component. For example, you can:

- Create another file and change the configuration of SpreadSheet from there. In the example below the editing line is disabled in the spreadsheet:

{{snippet BasicSample.vue}}
~~~js
<template>
<div class='app-box'>
	<Spreadsheet :edit-line=false></Spreadsheet>
</div>
</template>
~~~


####Working with SpreadSheet API

This variant of using SpreadSheet in a Vue.js application allows working with its API moving all calls of methods and event handlers into a separate file. 

- Create a *DataSample.vue* file and add a link to the spreadsheet: 

{{snippet DataSample.vue}}
~~~js
<div class='app-box'>
  <Spreadsheet ref="spreadsheet" class='base-size'></Spreadsheet>
</div>
~~~

- Define some actions that will be implemented on initialization of the SpreadSheet. For example, attach the *afterValueChange* event that will fire after changing the value of a cell, and add the *setValue()* method
that will set certain values in particular cells:

{{snippet DataSample.vue}}
~~~js
<script>
import Spreadsheet from "./Spreadsheet.vue";
export default {
  components: {
    Spreadsheet
  },
  mounted: function() {
    this.$refs.spreadsheet.spreadsheet.events.on(
      "afterValueChange",
      (cell, value) => {
        this.events = `Value in cell ${cell} changed to ${value}`;
      }
    );
    this.$refs.spreadsheet.spreadsheet.setValue("A1", 10);
  }
}
</script>
~~~

- Describe the methods you want to use while working with the spreadsheet: 

{{snippet DataSample.vue}}
~~~js
<script>
import Spreadsheet from "./Spreadsheet.vue";
export default {
  components: {
    Spreadsheet
  },
  mounted: function() {
    this.$refs.spreadsheet.spreadsheet.events.on(
      "afterValueChange",
      (cell, value) => {
        this.events = `Value in cell ${cell} changed to ${value}`;
      }
    );
    this.$refs.spreadsheet.spreadsheet.setValue("A1", 10);
  },
  methods: {
    parseData: function() {
      this.$refs.spreadsheet.spreadsheet.parse([
        { cell: "A1", value: 1000 },
        { cell: "B1", value: 5300 },
        { cell: "C1", value: 2900 }
      ]);
    },
    clearAll: function() {
      this.events = "";
      this.$refs.spreadsheet.spreadsheet.parse([]);
    }
  }
}
</script>
~~~

- Use the *v-on* directive of Vue.js to subscribe buttons to the SpreadSheet methods to make changes in the data:

{{snippet DataSample.vue}}
~~~js
<button v-on:click="parseData">Parse data</button>
<button v-on:click="clearAll">Clear all</button>
~~~








