---
sidebar_label: getActive()
title: getActive method
description: Get the active (visible) sheet of DHTMLX Spreadsheet with the sheets.getActive() method, which returns the id and the name of the sheet.
---

# getActive()

### Description

@short: Returns the sheet object that is currently active (visible) in the spreadsheet

### Usage

~~~ts
getActive: () => ISheet;
~~~

### Returns

- `ISheet` - (*object*) the currently active sheet object with the `id` and `name` properties.

### Example

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

**Change log:** Added in v6.0

**Related article:** [Working with sheets](working_with_sheets.md)
