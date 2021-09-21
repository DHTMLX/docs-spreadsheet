---
sidebar_label: selectionSet
title: JavaScript Spreadsheet - selectionSet Event
description: changetext
---

# selectionSet

@short: fires when a cell is selected

@signature:

@params:
`cell: string` - the id of a selected cell

@example:
spreadsheet.events.on("SelectionSet", function(cell){
	console.log("The cell "+spreadsheet.selection.get()+" is selected");
});

@descr:

todo `delete` 