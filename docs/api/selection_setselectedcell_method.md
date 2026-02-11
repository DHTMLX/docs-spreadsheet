---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection method
description: You can learn about the setSelectedCell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setSelectedCell()

### Description

@short: Selects the specified cell(s)

### Usage

~~~jsx
setSelectedCell(cell: string): void;
~~~

### Parameters

- `cell` - (required) the id(s) or a range of selected cell(s)

### Example

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// selecting a cell
spreadsheet.selection.setSelectedCell("B5");

// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");

// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

**Related articles:** [Work with Spreadsheet](/working_with_ssheet)
