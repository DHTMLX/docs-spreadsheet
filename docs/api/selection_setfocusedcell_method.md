---
sidebar_label: setFocusedCell() 
title: setFocusedCell selection method
description: You can learn about the setFocusedCell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setFocusedCell()

### Description

@short: Sets focus on the specified cell

### Usage

~~~jsx
setFocusedCell(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id of a cell to set focus on

### Example

~~~jsx {6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
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

The method does nothing while the selection is turned off with the `selection: false` configuration option or the `selection.disable()` method.

**Change log:** Moving the keyboard focus to the cell was added in v6.0.4

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
