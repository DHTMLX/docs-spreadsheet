---
sidebar_label: setSelectedCell() 
title: JavaScript Spreadsheet - setSelectedCell Selection Method
description: changetext
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

todo: check