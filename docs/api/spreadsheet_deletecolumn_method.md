---
sidebar_label: deleteColumn()
title: deleteColumn method
description: You can learn about the deleteColumn method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# deleteColumn()

### Description

@short: Removes a column from the spreadsheet

:::info
The method removes the column where the specified cell is located and moves the columns on the right of it to the left.

If the cell is inside a merged cell, the method removes every column that the merged cell spans.
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
You can delete several columns by providing a range of cells' ids as a parameter of the method, for example: "A1:C3". If the range touches a merged cell, the columns of the whole merged cell are deleted.
:::

### Details

When a column inside a merged cell is deleted, the whole merged cell is deleted with all its columns:

~~~jsx
spreadsheet.mergeCells("B2:D2");

// removes columns B, C and D
spreadsheet.deleteColumn("C2");
~~~

Merged cells on the right of the deleted columns move to the left together with their columns. If the deleted columns are frozen, the frozen area shrinks by the number of the deleted frozen columns.

The [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) events of the `"deleteColumn"` action receive the cell that is passed to the method, not the range of the deleted columns.

**Change log:** Deleting all the columns of a merged cell was added in v6.0.4

**Related articles:**
- [Work with rows and columns](work_with_rows_cols.md#removing-columns)
- [Merging cells](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
