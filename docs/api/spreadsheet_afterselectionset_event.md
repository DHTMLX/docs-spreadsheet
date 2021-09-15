---
sidebar_label: afterSelectionSet
title: JavaScript Spreadsheet - afterSelectionSet Event
description: changetext
---

# afterSelectionSet

@short: fires after cells are selected

@signature: afterSelectionSet: (cell: string) => void;

@params:
`cell: string` - the id of a cell

@example:
spreadsheet.events.on("afterSelectionSet", function(cells){
 	console.log("The cells "+spreadsheet.selection.getSelectedCell()+" are selected");
});

@descr:
