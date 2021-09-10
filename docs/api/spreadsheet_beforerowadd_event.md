---
sidebar_label: beforeRowAdd
title: JavaScript Spreadsheet - beforeRowAdd Event
description: changetext
---

# beforeRowAdd

@short: fires before a new row is added

@signature:

@params:
`cells: string` - the id(s) of a cell(s)

@returns:
*True* to add a row, *false* to prevent adding of a row.

@example:
spreadsheet.events.on("beforeRowAdd", function(cells){
	console.log("A new row will be added");
    return true;
});

@descr:
The event is blockable, returning false will prevent adding of a row.
