---
sidebar_label: addRow()
title: addRow method
description: Add an empty row to DHTMLX Spreadsheet with the addRow() method, which inserts it at the row of the specified cell and shifts the existing rows down.
---

# addRow()

### Description

@short: Adds a new row into the spreadsheet

:::info
The method finds the specified cell, selects it, moves the row where the cell is located one cell below and adds an empty row instead.
:::

### Usage

~~~jsx
addRow(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the id of a row that should be added

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// adds an empty second row
spreadsheet.addRow("G2");
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
