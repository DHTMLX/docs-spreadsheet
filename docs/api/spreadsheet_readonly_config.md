---
sidebar_label: readonly
title: readonly config
description: You can learn about the readonly config in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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

In the read-only mode, the toolbar, the menu and the formula bar are hidden, and the context menu and the column menu icon are not available. The sheet tabs stay, without the button that adds a sheet.

Users can still read and copy the data:

- the A1 cell is active after the data is loaded
- the cells can be navigated with the keyboard and selected with the mouse, and the selection events fire on these actions
- the cells can be copied with `Ctrl (Cmd) + C` and searched with `Ctrl (Cmd) + F`
- the sheets can be switched in the sheet tabs and with the keyboard

Changes of the data are refused:

- the editing keys, typing, cut and paste don't change the cells, and screen readers announce "The sheet is read-only"
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

**Related sample:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)


