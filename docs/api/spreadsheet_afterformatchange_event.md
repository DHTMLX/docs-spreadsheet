---
sidebar_label: afterFormatChange
title: JavaScript Spreadsheet - afterFormatChange Event
description: changetext
---

# afterFormatChange

@short: fires after the format of a cell is changed

@signature:

@params:
- `cell: string` - the id of a cell 
- `format: string` - a new format applied for a cell

@example:
spreadsheet.events.on("afterFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" has changed");
});

@descr:

@relatedapi:
api/spreadsheet_beforeformatchange_event.md
api/spreadsheet_setformat_method.md
api/spreadsheet_getformat_method.md

**Related articles**
number_formatting.md

@relatedsample:
05_events/01_events.html
