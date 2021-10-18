---
sidebar_label: beforeEditEnd
title: beforeeditend event
description: You can learn about the beforeeditend event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeEditEnd

@short: fires before editing of a cell is finished

@signature: {`beforeEditEnd: (cell: string, value: string) => void | boolean;`}

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@returns:
*True* to finish editing a cell, *false* to prevent closing of an editor.

@example:
spreadsheet.events.on("beforeEditEnd", function(){
 	console.log("Editing has started");
    return true;
});

@descr:

The event is blockable, returning false will prevent closing of an editor.
