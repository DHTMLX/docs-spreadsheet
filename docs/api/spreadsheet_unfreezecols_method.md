---
sidebar_label: unfreezeCols() 
title: unfreezeCols method
description: Unfreeze the frozen columns in DHTMLX Spreadsheet with the unfreezeCols() method, so that they scroll together with the rest of the grid.
---

# unfreezeCols()

### Description

@short: Unfreezes the fixed ("frozen") columns

### Usage

~~~jsx
unfreezeCols(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a column. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.unfreezeCols(); // fixed columns in the current sheet will be unfrozen
spreadsheet.unfreezeCols("sheet2!A1"); // fixed columns in "sheet2" will be unfrozen
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Related API:** [`freezeCols()`](api/spreadsheet_freezecols_method.md)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2