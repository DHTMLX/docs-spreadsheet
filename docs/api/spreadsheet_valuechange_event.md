---
sidebar_label: valueChange
title: JavaScript Spreadsheet - valueChange Event
description: changetext
---

# valueChange

@short: fires when the value of a cell is changed

@signature:

@params:
- `cell: string` - the id of a cell
- `value: string,number` - the value of a cell

@example:
spreadsheet.events.on("ValueChange", function(cell,value){
  console.log("The value of the cell " + spreadsheet.selection.get() +" is changed");
});

@descr:

todo `delete`