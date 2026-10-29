---
sidebar_label: setActive()
title: setActive method
description: Switch the active (visible) sheet of DHTMLX Spreadsheet to the sheet with the specified id with the sheets.setActive() method.
---

# setActive()

### Description

@short: Switches the active (visible) sheet to the one specified by its identifier

The spreadsheet UI re-renders to display the target sheet's contents.

### Usage

~~~ts
setActive: (id: Id) => void;
~~~

### Parameters

- `id` - (*string | number*) required, the unique identifier of the sheet to activate.

### Example

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

**Change log:** Added in v6.0

**Related article:** [Working with sheets](working_with_sheets.md)
