---
sidebar_label: deleteRow()
title: deleteRow method
description: You can learn about the deleteRow method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# deleteRow()

### Description

@short: Removes a row from the spreadsheet

:::info
The method finds the specified cell, selects it, removes the row where the cell is located and moves the row below to its position.
:::

### Usage

~~~jsx
deleteRow(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the id of a row that should be deleted

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// removes the second row
spreadsheet.deleteRow("G2");
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
