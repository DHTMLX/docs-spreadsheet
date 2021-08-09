---
sidebar_label: beforeEditEnd
title: JavaScript Spreadsheet - beforeEditEnd Event
description: changetext
---

# beforeEditEnd

@short: fires before editing of a cell is finished

@signature:

@params:

@returns:
*True* to finish editing a cell, *false* to prevent closing of an editor.

@example:
spreadsheet.events.on("beforeEditEnd", function(){
 	console.log("Editing has started");
    return true;
});

@descr:

The event is blockable, returning false will prevent closing of an editor.


@relatedapi:
api/spreadsheet_aftereditend_event.md


@template:api_event