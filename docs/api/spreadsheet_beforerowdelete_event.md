---
sidebar_label: beforeRowDelete
title: beforerowdelete event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the beforerowdelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
