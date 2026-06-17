---
sidebar_label: get()
title: get method
description: You can learn about the get method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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

const sheets = spreadsheet.sheets.getAll();
const sheet = spreadsheet.sheets.get(sheets[0].id);
console.log(sheet.name); // "sheet1"
~~~

**Change log:** Added in v6.0

**Related articles:** [Working with sheets](working_with_sheets.md)
