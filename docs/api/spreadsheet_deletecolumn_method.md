---
sidebar_label: deleteColumn()
title: JavaScript Spreadsheet - deleteColumn Method
description: changetext
---

# deleteColumn()

@short: removes a column from the spreadsheet

@signature:

@params:
`cell: string` - the id of a cell that contains the name of the column that should be deleted

@example:
// removes the "G" column
spreadsheet.deleteColumn("G2");

@descr:

The method finds the specified cell, selects it, removes the column where the cell is located and moves the column on the left to its position.

@relatedapi:
api/spreadsheet_addcolumn_method.md

@related:
working_with_ssheet.md#addingremovingrowsandcolumns
