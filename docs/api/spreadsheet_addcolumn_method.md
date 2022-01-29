---
sidebar_label: addColumn() 
title: addColumn method
description: You can learn about the addColumn method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# addColumn()

### Description

@short: adds a new column into the spreadsheet

### Usage

~~~jsx
addColumn(cell: string): void;
~~~

### Parameters

- `cell` - (mandatory) the id of the cell that contains the id of a column that should be added

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// adds an empty "G" column
spreadsheet.addColumn("G1");
~~~

:::info
The method finds the specified cell, selects it, moves the column where the cell is located one cell left and adds an empty column instead.
:::

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
