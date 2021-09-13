---
sidebar_label: load()
title: JavaScript Spreadsheet - load Method
description: changetext
---

# load()

@short: loads data from an external file

@signature:

@params:

- `url: string` - the URL of an external file
- `format: string` - optional, the type of data to load: "json" (default), "csv", "xlsx"

@returns:
A promise of data loading.

@example:
// load data in the JSON format (default)
spreadsheet.load("../common/data.json");

// load data in the CSV format
spreadsheet.load("../common/data.csv", "csv");

// load data in the Excel format, (.xlsx only)
spreadsheet.load("../common/data.xlsx", "xlsx");

@relatedsample:
**Related sample**: [Spreadsheet. Load Data](https://snippet.dhtmlx.com/ih9zmc3e)

**Related sample**: [Spreadsheet. CSV Load](https://snippet.dhtmlx.com/1f87y71v)

**Related sample**: [Spreadsheet. Import Xlsx](https://snippet.dhtmlx.com/cqlpy828)

@descr:

The component will make an AJAX call and expect the remote URL to provide valid data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
spreadsheet.load("../some/data.json").then(function(){
	spreadsheet.selection.add(123);
});
~~~

### Loading Excel data

{{note Please note that the component supports import from Excel files with the **.xlsx** extension only. }}

DHTMLX Spreadsheet uses the WebAssembly-based library [Excel2Json](https://github.com/dhtmlx/excel2json) for import of data from Excel. [Check the details](loading_data.md#loading-excel-file-xlsx).

**Related articles**

[Data loading and export](loading_data.md)
