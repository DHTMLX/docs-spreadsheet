---
sidebar_label: hideRows()
title: hideRows method
description: You can learn about the hideRows method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# hideRows()

### Description

@short: Hides rows

### Usage

~~~jsx
hideRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.hideRows("B2"); // the "2" row will be hidden 
spreadsheet.hideRows("sheet2!B2"); // the "2" row in "sheet2" will be hidden 
spreadsheet.hideRows("B2:C4"); // the rows from "2" to "4" will be hidden 
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md/#hidingshowing-rows-and-columns)

**Related API:** [`showRows()`](/api/spreadsheet_showrows_method)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2