---
sidebar_label: showCols()
title: showCols method
description: You can learn about the showCols method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# showCols()

### Description

@short: Shows hidden columns

### Usage

~~~jsx
showCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx
spreadsheet.showCols("B2"); // the "B" column will become visible again
spreadsheet.showCols("sheet2!B2"); // the "B" column in "sheet2" will become visible again
spreadsheet.showCols("B2:C2"); // the "B" and "C" columns will become visible again
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md/#hidingshowing-rows-and-columns)

**Related API:** [`hideCols()`](api/spreadsheet_hidecols_method.md)

**Related sample:** [Spreadsheet. Hiding columns and rows via API](https://snippet.dhtmlx.com/zere1ote)

**Change log:** Added in v5.2