---
sidebar_label: beforeEditStart
title: beforeeditstart event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the beforeeditstart event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeEditStart

@short: fires before editing of a cell has started

@signature: {`beforeEditStart: (cell: string, value: string) => void | boolean;`}

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@returns:
*True* to edit a cell, *false* to prevent editing

@example:
spreadsheet.events.on("beforeEditStart", function(){
 	console.log("Editing is about to start");
    return true;
});

@descr:
The event is blockable, returning false will prevent editing of a cell.
