---
sidebar_label: isDisabled() 
title: isDisabled selection method
description: Check whether the selection of cells is turned off in DHTMLX Spreadsheet with the selection.isDisabled() method.
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
