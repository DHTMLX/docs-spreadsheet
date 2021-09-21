---
sidebar_label: beforeRowDelete
title: JavaScript Spreadsheet - beforeRowDelete Event
description: changetext
---

# beforeRowDelete

@short: fires before a row is deleted

@signature: {`beforeRowDelete: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id of a cell

@returns:
*True* to delete a row, *false* to prevent deleting of a row.

@example:
spreadsheet.events.on("beforeRowDelete", function(cells){
	console.log("A row will be deleted");
    return true;
});

@descr:
The event is blockable, returning false will prevent deleting of a row.
