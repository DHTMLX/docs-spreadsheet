---
sidebar_label: showRows()
title: showRows method
description: Show hidden rows in DHTMLX Spreadsheet with the showRows() method, using the row of the passed cell or of the selected cell.
---

# showRows()

### Description

@short: Shows hidden rows

### Usage

~~~jsx
showRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.showRows("B2"); // the "2" row will become visible again
spreadsheet.showRows("sheet2!B2"); // the "2" row in "sheet2" will become visible again
spreadsheet.showRows("B2:C2"); // the rows from "2" to "4" will become visible again
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Related API:** [`hideRows()`](api/spreadsheet_hiderows_method.md)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2