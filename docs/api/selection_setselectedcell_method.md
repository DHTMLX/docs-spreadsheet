---
sidebar_label: setSelectedCell() 
title: setSelectedCell selection method
description: Select a cell, several cells or a range of cells in DHTMLX Spreadsheet with the selection.setSelectedCell() method, optionally scrolling to them.
---

# setSelectedCell()

### Description

@short: Selects the specified cell(s)

### Usage

~~~jsx
setSelectedCell(cell: string, scroll?: boolean): void;
~~~

### Parameters

- `cell` - (required) the id(s) or a range of selected cell(s)
- `scroll` - (optional) whether to scroll the Spreadsheet to the cell, `true` by default

### Example

~~~jsx {7,10,13}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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

**Related article:** [Work with Spreadsheet](working_with_ssheet.md)
