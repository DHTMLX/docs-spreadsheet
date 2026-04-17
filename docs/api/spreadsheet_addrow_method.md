---
sidebar_label: addRow()
title: addRow method
description: You can learn about the addRow method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// adds an empty second row
spreadsheet.addRow("G2");
~~~

**Related articles:** [Work with Spreadsheet](/working_with_ssheet/#addingremoving-rows-and-columns)
