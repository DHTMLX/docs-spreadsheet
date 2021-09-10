---
sidebar_label: beforeFormatChange
title: JavaScript Spreadsheet - beforeFormatChange Event
description: changetext
---

# beforeFormatChange

@short: fires before the format of a cell is changed

@params:
- `cell: string` - the id of a cell
- `format: string` - a new format applied for a cell

@returns:
*True* to change the format, *false* to prevent changing of the format.

@example:
spreadsheet.events.on("beforeFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" will change");
});

@descr:

The event is blockable. Return *false* to cancel changing of the format.

@relatedapi:
api/spreadsheet_afterformatchange_event.md
api/spreadsheet_setformat_method.md
api/spreadsheet_getformat_method.md

**Related articles**
number_formatting.md

@relatedsample:
05_events/01_events.html
