---
sidebar_label: beforeValueChange
title: JavaScript Spreadsheet - beforeValueChange Event
description: changetext
---

# beforeValueChange

@short: fires before the values of cells change

@signature: beforeValueChange: (cell: string, value: string) => void | boolean;

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@returns:
*True* to change the value of a cell, *false* to prevent changing of value.

@example:
spreadsheet.events.on("beforeValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" will change");
 return true;
});

@descr:

The event is blockable, returning false will prevent changing of value(s).
