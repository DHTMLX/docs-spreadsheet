---
sidebar_label: beforeRowAdd
title: beforerowadd event
description: You can learn about the beforerowadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeRowAdd

@short: fires before a new row is added

@signature: {`beforeRowAdd: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id of a cell

@returns:
*True* to add a row, *false* to prevent adding of a row.

@example:
spreadsheet.events.on("beforeRowAdd", function(cells){
	console.log("A new row will be added");
    return true;
});

@descr:
The event is blockable, returning false will prevent adding of a row.
