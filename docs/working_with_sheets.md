---
sidebar_label: Work with sheets
title: Working with Sheets
description: You can learn about working with sheets in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with sheets

Starting from v4.1, the library allows working with [multiple sheets](api/spreadsheet_multisheets_config.md) in the spreadsheet.

In this article we'll discuss the details on how to implement such operations as adding a new sheet into the spreadsheet, removing the unnecessary sheet, getting all sheets, or getting the currently active sheet via using API methods. Besides, we'll explain how to load multiple sheets into the spreadsheet at once.

{{note To learn how to interact with multiple sheets via the user interface, check our [User Guide](work_with_sheets.md). }}

Starting from v6.0, sheet management is handled by the **Sheet Manager** module, accessible via the `spreadsheet.sheets` property. The dedicated [Sheet Manager API](api/overview/sheetmanager_overview.md) replaces the sheet-related methods that were previously available directly on the Spreadsheet instance.

## Loading multiple sheets

To load several sheets into the spreadsheet, you should prepare data with the desired number of sheets and their configuration and pass them to the [`parse()`](api/spreadsheet_parse_method.md) method as a parameter. The data should be an *object*. [Check the list of attributes the object can include](api/spreadsheet_parse_method.md).

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note In case the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.}}

## Adding a new sheet

To add a new sheet into the spreadsheet, use the [`sheets.add()`](api/sheetmanager_add_method.md) method and pass the name of the new sheet as a parameter:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Add a sheet with a custom name
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // a generated unique id of the new sheet

// Add a sheet with an auto-generated name (e.g. "sheet2")
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

// Remove the second sheet by its id
const sheets = spreadsheet.sheets.getAll();
spreadsheet.sheets.remove(sheets[1].id);
~~~

Note, that a sheet won't be removed if the number of sheets in the spreadsheet is less than 2.

## Setting active sheet

To change the active sheet dynamically after initialization of the spreadsheet, use the [`sheets.setActive()`](api/sheetmanager_setactive_method.md) method. It takes the id of a sheet as a parameter:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Switch to the second sheet
const sheets = spreadsheet.sheets.getAll();
spreadsheet.sheets.setActive(sheets[1].id);

// Verify the switch
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "sheet2"
~~~

**Related sample:** [Spreadsheet. Set active sheet](https://snippet.dhtmlx.com/iowl449t)

## Getting active sheet

It is possible to get the sheet that is currently active by applying the [`sheets.getActive()`](api/sheetmanager_getactive_method.md) method:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "sheet1"
console.log(active.id);   // a unique auto-generated id of the active sheet
~~~

The method returns an object with the name and id attributes of the currently active sheet.

## Getting all sheets

The [`sheets.getAll()`](api/sheetmanager_getall_method.md) method allows you to get all sheets of the spreadsheet. The method returns an array with a set of sheet objects:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "...", name: "sheet1" }, // id is a unique auto-generated value
//   { id: "...", name: "sheet2" }
// ]
~~~

## Getting a sheet by id

To retrieve a single sheet object by its id, use the [`sheets.get()`](api/sheetmanager_get_method.md) method:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheets = spreadsheet.sheets.getAll();
const sheet = spreadsheet.sheets.get(sheets[0].id);
console.log(sheet.name); // "sheet1"
~~~

## Clearing sheets

There is the ability to clear the data of the specified sheet by its id via the [`sheets.clear()`](api/sheetmanager_clear_method.md) method:

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
