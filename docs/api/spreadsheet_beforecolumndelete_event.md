---
sidebar_label: beforeColumnDelete
title: JavaScript Spreadsheet - beforeColumnDelete Event
description: changetext
---

# beforeColumnDelete

@short: fires before a column is deleted

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@returns:
*True* to delete a column, *false* to prevent deleting of a column.

@example:
spreadsheet.events.on("beforeColumnDelete", function(cells){
	console.log("A column will be deleted");
    return true;
});

@descr:
The event is blockable, returning false will prevent deleting of a column.

@relatedapi:
api/spreadsheet_aftercolumndelete_event.md
