---
sidebar_label: getFocusedCell() 
title: JavaScript Spreadsheet - getFocusedCell Selection Method
description: changetext
---

# getFocusedCell()

@short: returns the id of a focused cell

@signature: {`getFocusedCell(): string;`}

@returns:
The id of a focused cell.

@example:
// setting focus on a cell
spreadsheet.selection.setFocusedCell("D4");

// getting the focused cell
var focused = spreadsheet.selection.getFocusedCell(); // ->"D4"

@descr:

**Related articles**

[Work with Spreadsheet](working_with_ssheet.md#setting-focus-on-a-cell)
