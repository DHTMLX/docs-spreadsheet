---
sidebar_label: afterSelectionSet
title: afterselectionset event
description: You can learn about the afterselectionset event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSelectionSet

@short: fires after cells are selected

@signature: {`afterSelectionSet: (cell: string) => void;`}

@params:
`cell: string` - the id(s) of a cell(s)

@example:
spreadsheet.events.on("afterSelectionSet", function(cells){
 	console.log("The cells "+spreadsheet.selection.getSelectedCell()+" are selected");
});

@descr:
