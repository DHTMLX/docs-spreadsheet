---
sidebar_label: removeSelectedCell() 
title: removeSelectedCell selection method
description: You can learn about the removeSelectedCell method of Selection in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# removeSelectedCell()

@short: removes selection from the specified cell(s)

@signature: {`removeSelectedCell(cell: string);`}

@params:
`cell: string` - the id(s) or a range of selected cell(s)

@example:
// selecting scattered cells
spreadsheet.selection.setSelectedCell("A1:A9,C2,B4,D6");
// removes selection from the specified cells
spreadsheet.selection.removeSelectedCell("A3:A6,C2");

@descr:

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#selecting-cells)

@changelog: added in v4.2