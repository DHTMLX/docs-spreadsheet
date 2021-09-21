---
sidebar_label: beforeColumnAdd
title: JavaScript Spreadsheet - beforeColumnAdd Event
description: changetext
---

# beforeColumnAdd

@short: fires before a new column is added

@signature: {`beforeColumnAdd: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id of a cell

@returns:
*True* to add a column, *false* to prevent adding of a column.

@example:
spreadsheet.events.on("beforeColumnAdd", function(cells){
	console.log("A new column will be added");
    return true;
});

@descr:

The event is blockable, returning false will prevent adding of a column.
