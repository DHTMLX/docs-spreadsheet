---
sidebar_label: readonly
title: readonly config
description: Turn on the read-only mode in DHTMLX Spreadsheet with the readonly property, which blocks data changes but keeps keyboard navigation, selection, copying and search.
---

# readonly

### Description

@short: Optional. Enables/disables the read-only mode

### Usage

~~~jsx
readonly?: boolean;
~~~

### Default config

~~~jsx
readonly: false
~~~

### Example

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // other config parameters
});
~~~

### Details

In the read-only mode, the toolbar, the menu and the formula bar are hidden, and the context menu and the column menu icon are not available. The sheet tabs stay, but without the button that adds a sheet, the sheet context menu and renaming by a double-click.

Users can still read and copy the data:

- the A1 cell is active after the data is loaded
- the cells can be navigated with the keyboard and selected with the mouse, and the selection events fire on these actions
- the cells can be copied with `Ctrl (Cmd) + C` and searched with `Ctrl (Cmd) + F`
- the sheets can be switched in the sheet tabs and with the keyboard
- the links in cells can be opened, but the buttons that edit and remove a link are disabled in the link popup

Changes of the data are refused:

- typing, the editing keys, cut and paste, undo and redo, and the shortcuts that format cells, insert a link, add a sheet or show hidden rows and columns are ignored, and screen readers announce "The sheet is read-only"
- the methods that edit the data, for example, [`setValue()`](api/spreadsheet_setvalue_method.md), [`setStyle()`](api/spreadsheet_setstyle_method.md) and [`deleteRow()`](api/spreadsheet_deleterow_method.md), and the [`startEdit()`](api/spreadsheet_startedit_method.md) method are ignored. The [`parse()`](api/spreadsheet_parse_method.md) and [`load()`](api/spreadsheet_load_method.md) methods still load data
- the fill handle is hidden
- the columns and rows can't be resized by dragging their borders, and a double-click on a column border doesn't fit the column width to the data

To turn off the keyboard navigation and the selection as well, set the [`selection`](api/spreadsheet_selection_config.md) option to `false`. In this case, the Spreadsheet has no active cell, and the cells can't be selected by the mouse, the keyboard or the API:

~~~jsx {3}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  selection: false,
  // other config parameters
});
~~~

**Change log:** The keyboard navigation, the selection, copying and search in the read-only mode were added in v6.0.4

**Related articles:**
- [Configuration](configuration.md#read-only-mode)
- [Customization](customization.md#custom-read-only-mode)
- [Accessibility: read-only setup](accessibility.md#read-only-setup)

**Related sample:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)


