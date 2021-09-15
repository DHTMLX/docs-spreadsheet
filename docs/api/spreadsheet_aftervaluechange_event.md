---
sidebar_label: afterValueChange
title: JavaScript Spreadsheet - afterValueChange Event
description: changetext
---

# afterValueChange

@short: fires after the value of a cell changes

@signature: afterValueChange: (cell: string, value: string) => void;

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@example:
spreadsheet.events.on("afterValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
});

@descr:
