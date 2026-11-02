---
sidebar_label: hideRows()
title: hideRows method
description: Hide one or several rows in DHTMLX Spreadsheet with the hideRows() method, by the id of a cell, a range of cells or the selected cell.
---

# hideRows()

### Description

@short: Hides rows

### Usage

~~~jsx
hideRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.hideRows("B2"); // the "2" row will be hidden 
spreadsheet.hideRows("sheet2!B2"); // the "2" row in "sheet2" will be hidden 
spreadsheet.hideRows("B2:C4"); // the rows from "2" to "4" will be hidden 
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Related API:** [`showRows()`](api/spreadsheet_showrows_method.md)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2