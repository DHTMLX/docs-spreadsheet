---
sidebar_label: unfreezeCols() 
title: unfreezeCols method
description: You can learn about the unfreezeCols method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# unfreezeCols()

### Description

@short: Unfreezes the fixed ("frozen") columns

### Usage

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

**Related articles:** [Work with Spreadsheet](/working_with_ssheet/#freezingunfreezing-rows-and-columns)

**Related API:** [`freezeCols()`](/api/spreadsheet_freezecols_method)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2