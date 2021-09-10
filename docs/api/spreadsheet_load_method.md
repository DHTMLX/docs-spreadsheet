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

dhtmlxSpreadSheet uses the WebAssembly-based library [Excel2Json](https://github.com/dhtmlx/excel2json) for import of data from Excel. [Check the details](loading_data.md#externaldataloading).

@relatedapi:
api/spreadsheet_parse_method.md

@relatedsample:
01_init/03_load_data.html
01_init/05_csv_load.html
02_usage/03_import_xlsx.html

@related:
loading_data.md
