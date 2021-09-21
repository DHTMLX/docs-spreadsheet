---
sidebar_label: beforeFocusSet
title: JavaScript Spreadsheet - beforeFocusSet Event
description: changetext
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
