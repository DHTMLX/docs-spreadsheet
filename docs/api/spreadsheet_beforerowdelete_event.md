---
sidebar_label: beforeRowDelete
title: JavaScript Spreadsheet - beforeRowDelete Event
description: changetext
---

# beforeRowDelete

@short: fires before a row is deleted

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@returns:
*True* to delete a row, *false* to prevent deleting of a row.

@example:
spreadsheet.events.on("beforeRowDelete", function(cells){
	console.log("A row will be deleted");
    return true;
});

@descr:
The event is blockable, returning false will prevent deleting of a row.

@relatedapi:
api/spreadsheet_afterrowdelete_event.md
