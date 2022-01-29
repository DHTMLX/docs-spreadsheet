---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection method
description: You can learn about the setSelectedCell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setSelectedCell()

### Description

@short: selects the specified cell(s)

### Usage

~~~jsx
setSelectedCell(cell: string): void;
~~~

### Parameters

- `cell` - (mandatory) the id(s) or a range of selected cell(s)

### Example

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");

// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");

// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**Related articles:** [Work with Spreadsheet](working_with_ssheet.md#selecting-cells)
