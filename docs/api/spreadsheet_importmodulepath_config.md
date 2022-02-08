---
sidebar_label: importModulePath
title: importModulePath config
description: You can learn about the importModulePath config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# importModulePath

### Description

@short: Optional. Sets the path to the import module

### Usage

~~~jsx
importModulePath?: string;
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  importModulePath: "../libs/excel2json/1.0/worker.js",
  // other config parameters
});
~~~

**Related articles:** [Data loading and export](loading_data.md#loading-excel-file-xlsx)

**Related sample:** [Spreadsheet. Custom Import Export Path](https://snippet.dhtmlx.com/wykwzfhm)

:::note 
DHTMLX Spreadsheet uses the WebAssembly-based library [Excel2json](https://github.com/DHTMLX/excel2json) for import of data from Excel.
:::

:::info
To import files you need to:

- install the **Excel2json** library
- set the path to the **worker.js** file via the **importModulePath** option in one of the two ways:
  - by providing a local path to the file on your computer, like: **"../libs/excel2json/1.0/worker.js"**
  - by providing a link to the file from CDN: **"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"**

By default the link to CDN is used.
:::


