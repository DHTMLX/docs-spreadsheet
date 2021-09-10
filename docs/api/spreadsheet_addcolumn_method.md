---
sidebar_label: addColumn() 
title: JavaScript Spreadsheet - addColumn Method
description: changetext
---

# addColumn()

@short: adds a new column into the spreadsheet

@signature:

@params:
`cell: string` - the id of the cell that contains the id of a column that should be added

@example:
// adds an empty "G" column
spreadsheet.addColumn("G1");

@descr:

The method finds the specified cell, selects it, moves the column where the cell is located one cell left and adds an empty column instead.

@relatedapi:
api/spreadsheet_deletecolumn_method.md

**Related articles**
working_with_ssheet.md#addingremovingrowsandcolumns
