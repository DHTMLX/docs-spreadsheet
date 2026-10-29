---
sidebar_label: deleteRow()
title: deleteRow method
description: Remove a row or a range of rows from DHTMLX Spreadsheet with the deleteRow() method, including all the rows of a merged cell.
---

# deleteRow()

### Description

@short: Removes a row from the spreadsheet

:::info
The method removes the row where the specified cell is located and moves the rows below it up.

If the cell is inside a merged cell, the method removes every row that the merged cell spans.
:::

### Usage

~~~jsx
deleteRow(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell that contains the id of a row that should be deleted

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// removes the second row
spreadsheet.deleteRow("G2");
~~~

:::note
You can delete several rows by providing a range of cells' ids as a parameter of the method, for example: "A1:C3". If the range touches a merged cell, the rows of the whole merged cell are deleted. A range that covers whole rows, for example, "A2:Z3" in a sheet with columns A to Z, is deleted as is.
:::

### Details

When a row inside a merged cell is deleted, the whole merged cell is deleted with all its rows:

~~~jsx
spreadsheet.mergeCells("B2:B4");

// removes rows 2, 3 and 4
spreadsheet.deleteRow("B3");
~~~

When whole rows are deleted, a merged cell that spans them becomes smaller. Merged cells below the deleted rows move up together with their rows. If the deleted rows are frozen, the frozen area shrinks by the number of the deleted frozen rows.

The [`beforeAction`](api/spreadsheet_beforeaction_event.md) and [`afterAction`](api/spreadsheet_afteraction_event.md) events of the `"deleteRow"` action receive the cell that is passed to the method, not the range of the deleted rows.

**Change log:** Deleting all the rows of a merged cell was added in v6.0.4

**Related articles:**
- [Work with rows and columns](work_with_rows_cols.md#removing-rows)
- [Merging cells](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
