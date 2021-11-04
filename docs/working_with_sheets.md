---
sidebar_label: Work with Sheets
title: Working with Sheets
description: You can learn about working with sheets in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with Sheets

Starting from v4.1, the library allows working with [multiple sheets](api/spreadsheet_multisheets_config.md) in the spreadsheet.

In this article we'll discuss the details on how to implement such operations as adding a new sheet into the spreadsheet, removing the unnecessary sheet, getting all sheets, or getting the currently active sheet via using API methods. Besides, we'll explain how to load multiple sheets into the spreadsheet at once.

{{note To learn how to interact with multiple sheets via the user interface, check our [User Guide](work_with_sheets.md). }}

## Loading multiple sheets

To load several sheets into the spreadsheet, you should prepare data with the desired number of sheets and their configuration and pass them to the [parse()](api/spreadsheet_parse_method.md) method as a parameter. The data should be an *object* with the following attributes:

- **styles** - (*object*) an object with CSS classes applied to particular cells
- **sheets** - (*array*) an array of sheet objects. Each object has the following properties:
    - **name** - (*string*) the sheet name
    - **id** - (*string*) the sheet id
    - **data** - (*array*) an array with data of the sheet

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note In case the [multiSheets](api/spreadsheet_multisheets_config.md) configuration option is set to *false*, only one sheet will be created.}}

## Adding a new sheet

To add a new sheet into the spreadsheet, use the [addSheet()](api/spreadsheet_addsheet_method.md) method and pass the name of the new sheet as a parameter:

~~~js
spreadsheet.addSheet("New Sheet");
// -> "u1614669331209"
~~~

The method returns the id of the created sheet.

## Removing a sheet

You can remove a sheet from the spreadsheet by its id via the [removeSheet()](api/spreadsheet_removesheet_method.md) method:

~~~js
spreadsheet.removeSheet("u1614669331209");
~~~

Note, that a sheet won't be deleted if the number of sheets in the spreadsheet is less than 2.

## Setting active sheet

To change the active sheet dynamically after initialization of the spreadsheet, use the [setActiveSheet()](api/spreadsheet_setactivesheet_method.md) method. It takes the id of a sheet as a parameter:

~~~js
spreadsheet.setActiveSheet("u1636003130922");
~~~

**Related sample:** [Spreadsheet. Set active sheet](https://snippet.dhtmlx.com/iowl449t)

## Getting active sheet

It is possible to get the sheet that is currently active by applying the [getActiveSheet()](api/spreadsheet_getactivesheet_method.md) method:

~~~js
spreadsheet.getActiveSheet();
// ->  {name: "sheet", id: "u1614675531904"}
~~~

The method returns an object with the name and id attributes of the currently active sheet.

## Getting sheets

The [getSheets()](api/spreadsheet_getsheets_method.md) method allows you to get all sheets of the spreadsheet. The method returns an array with a set of sheet objects:

~~~js
spreadsheet.getSheets();
// ->  [{name: "sheet1", id: "u1614669331194"}, …]
~~~

## Clearing sheets

There is the ability to clear the data of the specified sheet by its id via the [clearSheet()](api/spreadsheet_clearsheet_method.md) method:

~~~js
spreadsheet.clearSheet("income_id");
~~~

**Related sample:** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)

To clear the currently active sheet, call the [clearSheet()](api/spreadsheet_clearsheet_method.md) method without the parameter:

~~~js
spreadsheet.clearSheet();
~~~

If you need to clear the whole spreadsheet at once, use the [clear()](api/spreadsheet_clear_method.md) method.