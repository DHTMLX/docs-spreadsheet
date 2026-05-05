---
sidebar_label: add()
title: add method
description: You can learn about the add method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# add()

### Description

@short: Adds a new empty sheet to the spreadsheet and returns the unique identifier of the newly created sheet

If no name is provided, a default name will be generated automatically (e.g. "Sheet 2", "Sheet 3", etc.).

### Usage

~~~jsx
add: (name?: string) => Id;
~~~

### Parameters

- `name` - (*string*) optional, the displayed name for the new sheet tab. If omitted, a default name is assigned.

### Returns

- `Id` - (*string | number*) the unique identifier of the newly created sheet.

### Example

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Add a sheet with a custom name
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // e.g. "sheet_2"

// Add a sheet with an auto-generated name
const anotherId = spreadsheet.sheets.add();
~~~

**Change log:** Added in v6.0

**Related articles:** [Working with sheets](working_with_sheets.md)
