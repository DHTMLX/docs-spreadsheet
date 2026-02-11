---
sidebar_label: deleteColumn()
title: deleteColumn method
description: You can learn about the deleteColumn method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# deleteColumn()

### Description

@short: Removes a column from the spreadsheet

:::info
The method finds the specified cell, selects it, removes the column where the cell is located and moves the column on the left to its position.
:::

### Usage

~~~jsx
deleteColumn(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the name of the column that should be deleted

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// removes the "G" column
spreadsheet.deleteColumn("G2");
~~~

:::note
You can delete several columns by providing a range of cells' ids as a parameter of the method, e.g.: "A1:C3".
:::

**Related articles:** [Work with Spreadsheet](/working_with_ssheet/#addingremoving-rows-and-columns)
