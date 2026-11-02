---
sidebar_label: getSelectedCell() 
title: getSelectedCell selection method
description: Get the ids or ranges of the selected cells in DHTMLX Spreadsheet with the selection.getSelectedCell() method.
---

# getSelectedCell()

### Description

@short: Returns the id(s) of selected cell(s)

### Usage

~~~jsx
getSelectedCell(): string;
~~~

### Returns

The method returns the id(s) or a range of selected cell(s)

### Example

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// gets the selected cells
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
