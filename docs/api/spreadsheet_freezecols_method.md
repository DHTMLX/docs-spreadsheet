---
sidebar_label: freezeCols() 
title: freezeCols method
description: You can learn about the freezeCols method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# freezeCols()

### Description

@short: Fixes ("freezes") columns

### Usage

~~~jsx
freezeCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
~~~

**Related articles:** [Work with Spreadsheet](/working_with_ssheet/#freezingunfreezing-rows-and-columns)

**Related API:** [`unfreezeCols()`](../../api/spreadsheet_unfreezecols_method)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2
