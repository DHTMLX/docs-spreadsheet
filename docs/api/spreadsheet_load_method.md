---
sidebar_label: load()
title: load method
description: You can learn about the load method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# load()

### Description

@short: Loads data from an external file

### Usage

~~~jsx
load(url: string, type?: string): promise;
~~~

### Parameters

- `url` - (required) the URL of an external file
- `type` - (optional) optional, the type of data to load: "json" (default), "csv", "xlsx"

### Returns

The method returns a promise of data loading

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// load data in the JSON format (default)
spreadsheet.load("../common/data.json");

// load data in the CSV format
spreadsheet.load("../common/data.csv", "csv");

// load data in the Excel format, (.xlsx only)
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

**Related samples:**
- [Spreadsheet. Load Data](https://snippet.dhtmlx.com/ih9zmc3e)

- [Spreadsheet. CSV Load](https://snippet.dhtmlx.com/1f87y71v)

- [Spreadsheet. Import Xlsx](https://snippet.dhtmlx.com/cqlpy828)

:::info
The component will make an AJAX call and expect the remote URL to provide valid data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
spreadsheet.load("../some/data.json").then(function(){
    spreadsheet.selection.add(123);
});
~~~
:::

### Loading Excel data

:::note
Please note that the component supports import from Excel files with the **.xlsx** extension only.
:::

DHTMLX Spreadsheet uses the WebAssembly-based library [Excel2Json](https://github.com/dhtmlx/excel2json) for import of data from Excel. [Check the details](loading_data.md#loading-excel-file-xlsx).

### Loading JSON files

It is possible to allow end users to load a JSON file into the spreadsheet via the File Explorer. To do that: 

- Specify a button to open the File Explorer where ".json" files can be selected:

~~~html
<section class="dhx_sample-controls">
    <button class="dhx_sample-btn dhx_sample-btn--flat" onclick="json()">Import json</button>
</section>
~~~


- Call the **load()** method with two parameters: an empty string as an URL and the type of data to load ("json"):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
});

spreadsheet.parse(dataset);

function json() {
    spreadsheet.load("", "json"); // loads data from a .json file
}
~~~

Check the [example](https://snippet.dhtmlx.com/e3xct53l).

**Changelog:** The ability to load a JSON file via the File Explorer was added in v4.3

**Related articles:** [Data loading and export](/loading_data)
