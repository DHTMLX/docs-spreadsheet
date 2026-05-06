---
sidebar_label: getAll()
title: getAll method
description: You can learn about the getAll method of the Sheet Manager in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getAll()

### Description

@short: Returns an array of all sheet objects currently present in the spreadsheet

:::info
Each sheet object contains the sheet's id and name.
:::

### Usage

~~~jsx
getAll: () => ISheet[];
~~~

### Returns

- `ISheet[]` - (*array*) an array of sheet objects.

### Example

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

**Change log:** Added in v6.0

**Related articles:** [Working with sheets](working_with_sheets.md)
