---
sidebar_label: beforeEditStart
title: JavaScript Spreadsheet - beforeEditStart Event
description: changetext
---

# beforeEditStart

@short: fires before editing of a cell has started

@signature: beforeEditStart: (cell: string, value: string) => void | boolean;

@params:

@returns:
`mode: boolean` - true to edit a cell, false to prevent editing

@example:
spreadsheet.events.on("beforeEditStart", function(){
 	console.log("Editing is about to start");
    return true;
});

@descr:
The event is blockable, returning false will prevent editing of a cell.
