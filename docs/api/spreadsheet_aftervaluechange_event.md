---
sidebar_label: afterValueChange
title: JavaScript Spreadsheet - afterValueChange Event
description: changetext
---

# afterValueChange

@short: fires after the value of a cell changes

@signature:

@params:
- `cells: string` - the id(s) of a cell(s)
- `value: string,number,array` - the value(s) of a cell(s)

@example:
spreadsheet.events.on("afterValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
});

@descr:
