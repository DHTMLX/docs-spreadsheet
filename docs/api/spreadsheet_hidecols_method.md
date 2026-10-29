---
sidebar_label: hideCols()
title: hideCols method
description: Hide one or several columns in DHTMLX Spreadsheet with the hideCols() method, by the id of a cell, a range of cells or the selected cell.
---

# hideCols()

### Description

@short: Hides columns

### Usage

~~~jsx
hideCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.hideCols("B2"); // the "B" column will be hidden
spreadsheet.hideCols("sheet2!B2"); // the "B" column in "sheet2" will be hidden
spreadsheet.hideCols("B2:C2"); // the "B" and "C" columns will be hidden
~~~


**Related article:** [Work with Spreadsheet](working_with_ssheet.md#hidingshowing-rows-and-columns)

**Related API:** [`showCols()`](api/spreadsheet_showcols_method.md)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2