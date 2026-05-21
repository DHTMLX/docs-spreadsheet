---
sidebar_label: getActive()
title: getActive method
description: You can learn about the getActive method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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

**Related articles:** [Working with sheets](working_with_sheets.md)
