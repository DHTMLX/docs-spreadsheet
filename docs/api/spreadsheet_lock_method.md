---
sidebar_label: lock()
title: lock method
description: Lock a cell, a range of cells or several cells in DHTMLX Spreadsheet with the lock() method, so that users can't edit them.
---

# lock()

### Description

@short: Locks the specified cell

### Usage

~~~jsx
lock(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id(s) of a cell(s) or a range of cells

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// locks a cell
spreadsheet.lock("A1");

// locks a range of cells
spreadsheet.lock("A1:C1");

// locks specified cells
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
Starting with v4.1, the reference to a cell or a range of cells can be specified in the following format:

~~~jsx
spreadsheet.lock("sheet1!A2"); 
~~~

where `sheet1` is the name of the tab.

If the name of the tab isn't specified, the method locks the cell(s) of the active tab.
:::

**Related sample**: [Spreadsheet. Locked Cells](https://snippet.dhtmlx.com/czeyiuf8)

**Related article:** [Locking cells](working_with_cells.md#locking-cells)