---
sidebar_label: deleteRow()
title: JavaScript Spreadsheet - deleteRow Method
description: changetext
---

# deleteRow()

@short: removes a row from the spreadsheet

@signature: deleteRow: (cell: string) => void;

@params:
`cell: string` - the id of a cell that contains the id of a row that should be deleted

@example:
// removes the second row
spreadsheet.deleteRow("G2");

@descr:

The method finds the specified cell, selects it, removes the row where the cell is located and moves the row below to its position.

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)