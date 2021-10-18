---
sidebar_label: beforeFocusSet
title: beforefocusset event
description: You can learn about the beforefocusset event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeFocusSet

@short: fires before focus is set on a cell

@signature: {`beforeFocusSet: (cell: string) => void | boolean;`}

@params:
`cell: string` - the id of a cell

@returns:
*True* to set focus on a cell, *false* to prevent setting focus.

@example:
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  return true;
});

@descr:

The event is blockable, returning false will prevent setting focus on a cell.
