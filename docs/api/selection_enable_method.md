---
sidebar_label: enable() 
title: enable selection method
description: Turn the selection of cells back on in DHTMLX Spreadsheet with the selection.enable() method, which makes the A1 cell active and fires the selection events.
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
- [Accessibility: read-only setup](accessibility.md#read-only-setup)
