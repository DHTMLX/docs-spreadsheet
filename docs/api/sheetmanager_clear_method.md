---
sidebar_label: clear()
title: clear method
description: Clear the values, styles and formatting of a sheet in DHTMLX Spreadsheet with the sheets.clear() method, without deleting the sheet itself.
---

# clear()

### Description

@short: Clears the content of a specific sheet (removes all cell values, styles, and formatting) without deleting the sheet itself

If no id is provided, the currently active sheet is cleared.

### Usage

~~~ts
clear: (id?: Id) => void;
~~~

### Parameters

- `id` - (*string | number*) optional, the unique identifier of the sheet to clear. If omitted, the currently active sheet is cleared.

### Example

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Clear a specific sheet by id
spreadsheet.sheets.clear("sheet_1");

// Clear the currently active sheet
spreadsheet.sheets.clear();
~~~

**Change log:** Added in v6.0

**Related article:** [Working with sheets](working_with_sheets.md)
