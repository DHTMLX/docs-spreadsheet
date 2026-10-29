---
sidebar_label: freezeRows() 
title: freezeRows method
description: Freeze rows in DHTMLX Spreadsheet with the freezeRows() method, which fixes the rows up to the specified or the selected cell, on the current or another sheet.
---

# freezeRows()

### Description

@short: Fixes ("freezes") rows

### Usage

~~~jsx
freezeRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell is used 

### Example

~~~jsx 
spreadsheet.freezeRows("B2"); // the rows up to the "2" row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the "2" row in "sheet2" will be fixed
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**Related API:** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2