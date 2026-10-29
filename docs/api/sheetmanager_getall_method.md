---
sidebar_label: getAll()
title: getAll method
description: Get all the sheets of DHTMLX Spreadsheet with the sheets.getAll() method, which returns an array of objects with the ids and the names of the sheets.
---

# getAll()

### Description

@short: Returns an array of all sheet objects currently present in the spreadsheet

:::info
Each sheet object contains the sheet's id and name.
:::

### Usage

~~~ts
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

**Related article:** [Working with sheets](working_with_sheets.md)
