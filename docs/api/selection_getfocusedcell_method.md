---
sidebar_label: getFocusedCell() 
title: getFocusedCell selection method
description: Get the id of the focused (active) cell in DHTMLX Spreadsheet with the selection.getFocusedCell() method.
---

# getFocusedCell()

### Description

@short: Returns the id of a focused cell

### Usage

~~~jsx
getFocusedCell(): string;
~~~

### Returns

The method returns the id of the focused cell

### Example

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// setting focus on a cell
spreadsheet.selection.setFocusedCell("D4");

// getting the focused cell
const focused = spreadsheet.selection.getFocusedCell(); // ->"D4"
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
