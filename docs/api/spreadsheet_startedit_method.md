---
sidebar_label: startEdit()
title: startEdit method
description: You can learn about the startEdit method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# startEdit()

### Description

@short: Starts editing in the selected cell

:::info
If the id of a cell isn't passed, editing will start in the currently selected cell.
:::

### Usage

~~~jsx
startEdit(cell?: string, initialValue?: string): void;
~~~

### Parameters

- `cell` - (optional) the id of a cell
- `initialValue` - (optional) the cell value

### Example

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// starts editing the currently selected cell
spreadsheet.startEdit();
~~~

**Related articles:** [Work with Spreadsheet](working_with_cells.md#editing-a-cell)
