---
sidebar_label: afterValueChange
title: aftervaluechange event
description: You can learn about the aftervaluechange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterValueChange

@short: fires after the value of a cell changes

@signature: {`afterValueChange: (cell: string, value: string) => void;`}

@params:
- `cell: string` - the id of a cell
- `value: string` - the value of a cell

@example:
spreadsheet.events.on("afterValueChange", function(cell,value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
});

@descr:
