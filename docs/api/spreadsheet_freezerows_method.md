---
sidebar_label: freezeRows() 
title: freezeRows method
description: You can learn about the freezeRows method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# freezeRows()

### Description

@short: Fixes ("freezes") rows

### Usage

~~~jsx
freezeRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.freezeRows("B2"); // the rows up to the second row will be fixed
spreadsheet.freezeRows("sheet2!B2"); // the rows up to the second row in "sheet2" will be fixed
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md/#freezingunfreezing-rows-and-columns)

**Related API:** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md/)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2