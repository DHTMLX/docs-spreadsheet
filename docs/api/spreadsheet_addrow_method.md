---
sidebar_label: addRow()
title: JavaScript Spreadsheet - addRow Method
description: changetext
---

# addRow()

@short: adds a new row into the spreadsheet

@signature: {`addRow: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell that contains the id of a row that should be added

@example:
// adds an empty second row
spreadsheet.addRow("G2");

@descr:

The method finds the specified cell, selects it, moves the row where the cell is located one cell below and adds an empty row instead.

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
