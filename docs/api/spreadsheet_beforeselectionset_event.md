---
sidebar_label: beforeSelectionSet
title: JavaScript Spreadsheet - beforeSelectionSet Event
description: changetext
---

# beforeSelectionSet

@short: fires before cells are selected

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@returns:
*True* to select cells, *false* to prevent selection of cells.

@example:
spreadsheet.events.on("beforeSelectionSet", function(cells){
 	console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    return true;
});

@descr:

The event is blockable, returning false will prevent selection of cells.
