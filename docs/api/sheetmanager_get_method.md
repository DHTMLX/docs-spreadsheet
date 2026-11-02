---
sidebar_label: get()
title: get method
description: Get a sheet object by its id in DHTMLX Spreadsheet with the sheets.get() method.
---

# get()

### Description

@short: Returns a single sheet object by its identifier

### Usage

~~~ts
get: (id: Id) => ISheet;
~~~

### Parameters

- `id` - (*string | number*) required, the unique identifier of the sheet to retrieve.

### Returns

- `ISheet` - (*object*) the sheet object matching the given id.

### Example

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

**Change log:** Added in v6.0

**Related article:** [Working with sheets](working_with_sheets.md)
