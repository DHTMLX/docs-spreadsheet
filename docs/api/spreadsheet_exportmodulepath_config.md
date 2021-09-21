---
sidebar_label: exportModulePath
title: JavaScript Spreadsheet - exportModulePath Config
description: changetext
---

# exportModulePath

@short: sets the path to the export module

@signature: {`exportModulePath?: string;`}

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
    exportModulePath: "../libs/json2excel/1.0/worker.js"
});

@relatedsample:
**Related sample**: [Spreadsheet. Export Xlsx](https://snippet.dhtmlx.com/btyo3j8s)

@descr:

{{note DHTMLX Spreadsheet uses the WebAssembly-based library [JSON2Excel](https://github.com/dhtmlx/json2excel) for export of data into Excel.}}

To export files you need to:

- install the **JSON2excel** library
- set the path to the **worker.js** file via the **exportModulePath** option in one of the two ways:
  - by providing a local path to the file on your computer, like: `"../libs/json2excel/1.0/worker.js"`
  - by providing a link to the file from CDN: `"https://cdn.dhtmlx.com/libs/json2excel/1.0/worker.js"`

By default the link to CDN is used.

**Related articles**

[Data loading and export](loading_data.md#exporting-data)
