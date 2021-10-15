---
sidebar_label: afterFormatChange
title: afterformatchange event | DHTMLX JavaScript Spreadsheet Docs
description: You can learn about the afterformatchange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterFormatChange

@short: fires after the format of a cell is changed

@signature: {`afterFormatChange: (cell: string, format: string) => void;`}

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
