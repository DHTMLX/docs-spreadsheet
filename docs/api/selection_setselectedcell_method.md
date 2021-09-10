---
sidebar_label: setSelectedCell() 
title: JavaScript Spreadsheet - setSelectedCell Selection Method
description: changetext
---

# setSelectedCell()

@short: selects the specified cell(s)

@signature:

@params:
`cells: string` - the id(s) or a range of selected cell(s)

@example:
// selecting a cell
spreadsheet.selection.setSelectedCell("B5");
// selecting a range of cells
spreadsheet.selection.setSelectedCell("B1:B5");
// selecting scattered cells
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");

@descr:

@relatedapi:
api/selection_getselectedcell_method.md

@related:
working_with_ssheet.md#selectingcells
