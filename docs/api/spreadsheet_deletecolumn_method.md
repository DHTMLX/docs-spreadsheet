---
sidebar_label: deleteColumn()
title: deletecolumn method
description: You can learn about the deletecolumn method in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# deleteColumn()

@short: removes a column from the spreadsheet

@signature: {`deleteColumn: (cell: string) => void;`}

@params:
`cell: string` - the id of a cell that contains the name of the column that should be deleted

@example:
// removes the "G" column
spreadsheet.deleteColumn("G2");

@descr:

The method finds the specified cell, selects it, removes the column where the cell is located and moves the column on the left to its position.

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#addingremoving-rows-and-columns)
