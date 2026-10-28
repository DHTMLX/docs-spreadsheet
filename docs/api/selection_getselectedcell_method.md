---
sidebar_label: getSelectedCell() 
title: getSelectedCell selection method
description: You can learn about the getSelectedCell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# getSelectedCell()

### Description

@short: Returns the id(s) of selected cell(s)

### Usage

~~~jsx
getSelectedCell(): string;
~~~

### Returns

The method returns the id(s) or a range of selected cell(s), or `undefined` if no cell is selected, for example, while the selection is turned off with the [`selection: false`](api/spreadsheet_selection_config.md) configuration option or the [`selection.disable()`](api/selection_disable_method.md) method

### Example

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// gets the selected cells
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
