---
sidebar_label: isDisabled() 
title: isDisabled selection method
description: You can learn about the isDisabled selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# isDisabled()

### Description

@short: Checks whether the selection of cells is turned off

### Usage

~~~jsx
isDisabled(): boolean;
~~~

### Returns

The method returns `true` if the selection is turned off; otherwise, `false`

### Example

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    selection: false,
    // other config parameters
});
spreadsheet.parse(data);

const disabled = spreadsheet.selection.isDisabled(); // -> true
~~~

**Change log:** Added in v6.0.4

**Related articles:**
- [`selection`](api/spreadsheet_selection_config.md)
- [`enable()`](api/selection_enable_method.md)
- [`disable()`](api/selection_disable_method.md)
