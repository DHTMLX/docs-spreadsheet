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

`cell` - (required) the id of a cell to set focus on

### Example

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.selection.setFocusedCell("D4");
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md#setting-focus-on-a-cell)
