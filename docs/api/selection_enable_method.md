---
sidebar_label: enable() 
title: enable selection method
description: You can learn about the enable selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# enable()

### Description

@short: Turns the selection of cells on

### Usage

~~~jsx
enable(): void;
~~~

### Example

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.enable();
~~~

### Details

The method makes the A1 cell of the active sheet active. The [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md), [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md), [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md) and [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md) events fire for the A1 cell.

If the selection is already turned on, the method does nothing.

**Change log:** Added in v6.0.4

**Related articles:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`disable()`](api/selection_disable_method.md)
