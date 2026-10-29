---
sidebar_label: deleteColumn()
title: deleteColumn method
description: Remove a column or a range of columns from DHTMLX Spreadsheet with the deleteColumn() method, including all the columns of a merged cell.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// removes the "G" column
spreadsheet.deleteColumn("G2");
~~~

:::note
You can delete several columns by providing a range of cells' ids as a parameter of the method, for example: "A1:C3". If the range touches a merged cell, the columns of the whole merged cell are deleted. A range that covers whole columns, for example, "B1:C100" in a sheet with 100 rows, is deleted as is.
:::

### Details

When a column inside a merged cell is deleted, the whole merged cell is deleted with all its columns:

~~~jsx
spreadsheet.mergeCells("B2:D2");

// removes columns B, C and D
spreadsheet.deleteColumn("C2");
~~~

When whole columns are deleted, a merged cell that spans them becomes smaller. Merged cells on the right of the deleted columns move to the left together with their columns. If the deleted columns are frozen, the frozen area shrinks by the number of the deleted frozen columns.

The [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) events of the `"deleteColumn"` action receive the cell that is passed to the method, not the range of the deleted columns.

**Change log:** Deleting all the columns of a merged cell was added in v6.0.4

**Related articles:**
- [Work with rows and columns](work_with_rows_cols.md#removing-columns)
- [Merging cells](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
