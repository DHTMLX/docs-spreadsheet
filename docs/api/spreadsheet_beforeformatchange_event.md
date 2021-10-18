---
sidebar_label: beforeFormatChange
title: beforeformatchange event
description: You can learn about the beforeformatchange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeFormatChange

@short: fires before the format of a cell is changed

@signature: {`beforeFormatChange: (cell: string, format: string) => void | boolean;`}

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
