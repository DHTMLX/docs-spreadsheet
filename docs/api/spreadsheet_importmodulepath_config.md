---
sidebar_label: importModulePath
title: JavaScript Spreadsheet - importModulePath Config
description: changetext
---

# importModulePath

@short: sets the path to the import module

@signature:

@type: string

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
    importModulePath: "../libs/excel2json/1.0/worker.js"
});

@relatedsample:
**Related sample**: [Spreadsheet. Import Xlsx](https://snippet.dhtmlx.com/cqlpy828)

@descr:

{{note DHTMLX Spreadsheet uses the WebAssembly-based library [Excel2json](https://github.com/DHTMLX/excel2json) for import of data from Excel.}}

To import files you need to:

- install the **Excel2json** library
- set the path to the **worker.js** file via the **importModulePath** option in one of the two ways:
  - by providing a local path to the file on your computer, like: **"../libs/excel2json/1.0/worker.js"**
  - by providing a link to the file from CDN: **"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"**

By default the link to CDN is used.

**Related articles**

[Data loading and export](loading_data.md#loading-excel-file-xlsx)
