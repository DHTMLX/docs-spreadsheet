---
sidebar_label: unfreezeRows() 
title: unfreezeRows method
description: Unfreeze the frozen rows in DHTMLX Spreadsheet with the unfreezeRows() method, so that they scroll together with the rest of the grid.
---

# unfreezeRows()

### Description

@short: Unfreezes the fixed ("frozen") rows

### Usage

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Related API:** [`freezeRows()`](api/spreadsheet_freezerows_method.md)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2