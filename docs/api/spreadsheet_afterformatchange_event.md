---
sidebar_label: afterFormatChange
title: JavaScript Spreadsheet - afterFormatChange Event
description: changetext
---

# afterFormatChange

@short: fires after the format of a cell is changed

@signature: afterFormatChange: (cell: string, format: string) => void;

@params:
- `cell: string` - the id of a cell 
- `format: string` - a new format applied for a cell

@example:
spreadsheet.events.on("afterFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" has changed");
});

@relatedsample:
**Related sample**: [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)

@descr:

**Related articles**

[Number formatting](number_formatting.md)
