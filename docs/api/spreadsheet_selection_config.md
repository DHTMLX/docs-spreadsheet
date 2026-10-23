---
sidebar_label: selection
title: selection config
description: Turn off the selection of cells in DHTMLX Spreadsheet with the selection property, alone or with the read-only mode, to show the data without an active cell.
---

# selection

### Description

@short: Optional. Enables/disables the selection of cells

### Usage

~~~jsx
selection?: boolean;
~~~

### Default config

~~~jsx
selection: true
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
~~~

### Details

When the property is set to `false`:

- the Spreadsheet has no active cell
- the cells can't be selected with the mouse, the keyboard or the API: the [`setSelectedCell()`](api/selection_setselectedcell_method.md) and [`setFocusedCell()`](api/selection_setfocusedcell_method.md) methods are ignored, and the [`getSelectedCell()`](api/selection_getselectedcell_method.md) and [`getFocusedCell()`](api/selection_getfocusedcell_method.md) methods return `undefined`
- the cells can't be edited from the interface: the formula bar is locked, the fill handle is hidden, and the [`startEdit()`](api/spreadsheet_startedit_method.md) method is ignored
- the context menu and the column menu icon are not available
- `Tab` stops on the grid once and moves the focus further, and `Ctrl + F6` skips the sheet

The columns and rows can still be resized by dragging their borders, and the data can still be changed with the API, for example, with the [`setValue()`](api/spreadsheet_setvalue_method.md) method.

Combined with the [`readonly`](api/spreadsheet_readonly_config.md) property, the option turns off the keyboard navigation and the selection that are available in the read-only mode:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    readonly: true,
    selection: false,
    // other config parameters
});
~~~

To turn the selection off and on at runtime, use the [`selection.disable()`](api/selection_disable_method.md) and [`selection.enable()`](api/selection_enable_method.md) methods.

**Change log:** Added in v6.0.4

**Related articles:**
- [Selection of cells](configuration.md#selection-of-cells)
- [Read-only mode](configuration.md#read-only-mode)
- [Accessibility: read-only setup](accessibility.md#read-only-setup)
