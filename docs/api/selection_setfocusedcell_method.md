---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection method
description: Make a cell active and move the keyboard focus to it in DHTMLX Spreadsheet with the selection.setFocusedCell() method.
---

# setFocusedCell()

### Description

@short: Sets focus on the specified cell

### Usage

~~~jsx
setFocusedCell(cell: string, scroll?: boolean): void;
~~~

### Parameters

- `cell` - (required) the id of a cell to set focus on
- `scroll` - (optional) whether to scroll the Spreadsheet to the cell, `true` by default

### Example

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setFocusedCell("D4");
~~~

### Details

The method makes the specified cell active and, after the redraw, moves the keyboard focus to it. The keyboard focus isn't moved if it is:

- in an element outside the Spreadsheet
- on the toolbar, the menu or the sheet tabs reached with the keyboard
- in an open cell editor

If the keyboard focus is on the page body, for example, right after the page is loaded, the method moves it to the cell.

The same rules apply to any other change of the active cell, for example, by another API method.

If the [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md) event handler returns `false`, the active cell isn't changed and the keyboard focus isn't moved.

The method does nothing while the selection is turned off with the [`selection: false`](api/spreadsheet_selection_config.md) configuration option or the [`selection.disable()`](api/selection_disable_method.md) method.

**Change log:** Moving the keyboard focus to the cell was added in v6.0.4

**Related articles:**
- [Work with Spreadsheet](working_with_ssheet.md)
- [Accessibility: keyboard navigation](accessibility.md#keyboard-navigation)
