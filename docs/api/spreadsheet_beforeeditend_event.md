---
sidebar_label: beforeEditEnd
title: JavaScript Spreadsheet - beforeEditEnd Event
description: changetext
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
