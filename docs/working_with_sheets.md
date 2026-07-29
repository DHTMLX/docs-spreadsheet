---
sidebar_label: Work with sheets
title: Working with Sheets
description: You can learn about working with sheets in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with sheets

Starting from v4.1, you can work with [multiple sheets](api/spreadsheet_multisheets_config.md) in the spreadsheet.

This article describes how to add a new sheet, remove an unnecessary sheet, get all sheets, and get the currently active sheet using API methods. It also explains how to load multiple sheets into the spreadsheet at once.

{{note To learn how to interact with multiple sheets via the user interface, check our [User Guide](work_with_sheets.md). }}

Starting from v6.0, the **Sheet Manager** module handles sheet management through the `spreadsheet.sheets` property. The dedicated [Sheet Manager API](api/overview/sheetmanager_overview.md) replaces the sheet-related methods that were previously available directly on the Spreadsheet instance.

## Loading multiple sheets

To load several sheets into the spreadsheet, prepare data with the desired number of sheets and their configuration, and pass it to the [`parse()`](api/spreadsheet_parse_method.md) method as a parameter. The data should be an `object`. [Check the list of attributes the object can include](api/spreadsheet_parse_method.md).

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note If the [`multiSheets`](api/spreadsheet_multisheets_config.md) configuration option is set to `false`, only one sheet is created.}}

## Adding a new sheet

To add a new sheet into the spreadsheet, use the [`sheets.add()`](api/sheetmanager_add_method.md) method and pass the name of the new sheet as a parameter:

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

The method returns the id of the created sheet.

## Removing a sheet

You can remove a sheet from the spreadsheet by its id via the [`sheets.remove()`](api/sheetmanager_remove_method.md) method:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Remove a sheet by its id
spreadsheet.sheets.remove("sheet_2");
~~~

Note that a sheet is not removed if the spreadsheet has fewer than 2 sheets.

## Setting active sheet

To change the active sheet dynamically after initialization of the spreadsheet, use the [`sheets.setActive()`](api/sheetmanager_setactive_method.md) method. It takes the id of a sheet as a parameter:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Switch to the second sheet
spreadsheet.sheets.setActive("sheet_2");

// Verify the switch
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Related sample:** [Spreadsheet. Set active sheet](https://snippet.dhtmlx.com/iowl449t)

## Getting active sheet

You can get the currently active sheet by applying the [`sheets.getActive()`](api/sheetmanager_getactive_method.md) method:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

The method returns an object with the name and id attributes of the currently active sheet.

## Getting all sheets

The [`sheets.getAll()`](api/sheetmanager_getall_method.md) method returns all sheets of the spreadsheet as an array of sheet objects:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

## Getting a sheet by id

To retrieve a single sheet object by its id, use the [`sheets.get()`](api/sheetmanager_get_method.md) method:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

## Clearing sheets

You can clear the data of the specified sheet by its id with the [`sheets.clear()`](api/sheetmanager_clear_method.md) method:

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

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

If you need to clear the whole spreadsheet at once, use the [`clear()`](api/spreadsheet_clear_method.md) method.
