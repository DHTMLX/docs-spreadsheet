---
sidebar_label: beforeColumnAdd
title: beforecolumnadd event
description: You can learn about the beforecolumnadd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
