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

@relatedsample:
**Related sample**: [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)

@descr:

The event is blockable. Return *false* to cancel changing of the format.

**Related articles**

[Number formatting](number_formatting.md)
