---
sidebar_label: setSelectedCell() 
title: setselectedcell selection method | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the setselectedcell selection method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# setSelectedCell()

@short: selects the specified cell(s)

@signature: {`setSelectedCell(cell: string);`}

@params:
`cell: string` - the id(s) or a range of selected cell(s)

@example:
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");

@descr:

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#selecting-cells)
