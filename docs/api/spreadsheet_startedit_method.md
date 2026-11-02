---
sidebar_label: startEdit()
title: startEdit method
description: Start editing the passed or the selected cell of DHTMLX Spreadsheet with the startEdit() method, optionally with an initial value.
---

# startEdit()

### Description

@short: Starts editing in the selected cell

:::info
If the id of a cell isn't passed, editing starts in the currently selected cell.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// starts editing the currently selected cell
spreadsheet.startEdit();
~~~

### Details

Typing in the active cell starts editing through this method. Text composed with an input method editor (IME) is passed as `initialValue` when the composition ends. So the [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md) and [`afterEditStart`](api/spreadsheet_aftereditstart_event.md) events receive the typed or the composed text, and `beforeEditStart` can cancel the edit.

**Change log:** Starting the edit with the text composed with an IME was added in v6.0.4

**Related article:** [Work with Spreadsheet](working_with_cells.md#editing-a-cell)
