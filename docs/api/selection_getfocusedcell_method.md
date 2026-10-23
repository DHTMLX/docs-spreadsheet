---
sidebar_label: getFocusedCell() 
title: getFocusedCell selection method
description: You can learn about the getFocusedCell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getFocusedCell()

### Description

@short: Returns the id of a focused cell

### Usage

~~~jsx
getFocusedCell(): string;
~~~

### Returns

The method returns the id of the focused cell, or `undefined` if there is no focused cell, for example, while the selection is turned off with the [`selection: false`](api/spreadsheet_selection_config.md) configuration option or the [`selection.disable()`](api/selection_disable_method.md) method

### Example

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// setting focus on a cell
spreadsheet.selection.setFocusedCell("D4");

// getting the focused cell
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
