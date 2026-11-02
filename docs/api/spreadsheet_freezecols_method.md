---
sidebar_label: freezeCols() 
title: freezeCols method
description: Freeze columns in DHTMLX Spreadsheet with the freezeCols() method, which fixes the columns up to the specified or the selected cell, on the current or another sheet.
---

# freezeCols()

### Description

@short: Fixes ("freezes") columns

### Usage

~~~jsx
freezeCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.freezeCols("B2"); // the columns up to the "B" column will be fixed
spreadsheet.freezeCols("sheet2!B2"); // the columns up to the "B" column in "sheet2" will be fixed
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Related API:** [`unfreezeCols()`](api/spreadsheet_unfreezecols_method.md)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2
