---
sidebar_label: beforeColumnDelete
title: beforecolumndelete event
description: You can learn about the beforecolumndelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeColumnDelete

@short: fires before a column is deleted

@signature: {`beforeColumnDelete: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id of a cell

@returns:
*True* to delete a column, *false* to prevent deleting of a column.

@example:
spreadsheet.events.on("beforeColumnDelete", function(cells){
	console.log("A column will be deleted");
    return true;
});

@descr:
The event is blockable, returning false will prevent deleting of a column.
