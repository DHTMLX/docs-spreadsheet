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

The method returns an id(s) or a range of selected cell(s)

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

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md)
