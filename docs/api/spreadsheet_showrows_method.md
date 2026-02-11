---
sidebar_label: showRows()
title: showRows method
description: You can learn about the showRows method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# showRows()

### Description

@short: Shows hidden rows

### Usage

~~~jsx
showRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

**Related articles:** [Work with Spreadsheet](/working_with_ssheet/#hidingshowing-rows-and-columns)

**Related API:** [`hideRows()`](/api/spreadsheet_hiderows_method)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2