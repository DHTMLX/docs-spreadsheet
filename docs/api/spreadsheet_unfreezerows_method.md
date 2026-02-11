---
sidebar_label: unfreezeRows() 
title: unfreezeRows method
description: You can learn about the unfreezeRows method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# unfreezeRows()

### Description

@short: Unfreezes the fixed ("frozen") rows

### Usage

~~~jsx
unfreezeRows(cell?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of the cell used to define the id of a row. If the cell id isn't passed, the currently selected cell will be used 

### Example

~~~jsx 
spreadsheet.unfreezeRows(); // fixed rows in the current sheet will be unfrozen
spreadsheet.unfreezeRows("sheet2!A1"); // fixed rows in "sheet2" will be unfrozen
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md/#freezingunfreezing-rows-and-columns)

**Related API:** [`freezeRows()`](/api/spreadsheet_freezerows_method)

**Related sample:** [Spreadsheet. Freezing columns and rows via API](https://snippet.dhtmlx.com/a12xd1mn)

**Change log:** 
Added in v5.2