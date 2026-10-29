---
sidebar_label: disable() 
title: disable selection method
description: Turn the selection of cells off in DHTMLX Spreadsheet at runtime with the selection.disable() method, which removes the active cell and ignores selection by the mouse, the keyboard and the API.
---

# disable()

### Description

@short: Turns the selection of cells off

### Usage

~~~jsx
disable(): void;
~~~

### Example

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.disable();
~~~

### Details

The method:

- ends the editing of a cell and saves the entered value
- removes the selected and the active cells on every sheet
- ignores the selection by the mouse, the keyboard and the API until the [`enable()`](api/selection_enable_method.md) method is called

While the selection is turned off, the [`getSelectedCell()`](api/selection_getselectedcell_method.md) and [`getFocusedCell()`](api/selection_getfocusedcell_method.md) methods return `undefined`. The other effects are the same as for the [`selection: false`](api/spreadsheet_selection_config.md#details) configuration option.

If the selection is already turned off, the method does nothing.

**Change log:** Added in v6.0.4

**Related articles:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [Accessibility: read-only setup](accessibility.md#read-only-setup)
