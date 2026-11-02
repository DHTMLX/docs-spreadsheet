---
sidebar_label: addColumn() 
title: addColumn method
description: Add an empty column to DHTMLX Spreadsheet with the addColumn() method, which inserts it at the column of the specified cell and shifts the existing columns to the right.
---

# addColumn()

### Description

@short: Adds a new column into the spreadsheet

:::info
The method finds the specified cell, selects it, moves the column where the cell is located one cell left and adds an empty column instead.
:::

### Usage

~~~jsx
addColumn(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of the cell that contains the id of a column that should be added

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// adds an empty "G" column
spreadsheet.addColumn("G1");
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
