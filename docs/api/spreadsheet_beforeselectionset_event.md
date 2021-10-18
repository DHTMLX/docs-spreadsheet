---
sidebar_label: beforeSelectionSet
title: beforeselectionset event
description: You can learn about the beforeselectionset event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSelectionSet

@short: fires before cells are selected

@signature: {`beforeSelectionSet: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id(s) of a cell(s)

@returns:
*True* to select cells, *false* to prevent selection of cells.

@example:
spreadsheet.events.on("beforeSelectionSet", function(cells){
 	console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    return true;
});

@descr:

The event is blockable, returning false will prevent selection of cells.
