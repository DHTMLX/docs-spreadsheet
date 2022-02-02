---
sidebar_label: afterFormatChange
title: afterFormatChange event
description: You can learn about the afterFormatChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterFormatChange

### Description

@short: fires after the format of a cell is changed

### Usage

~~~jsx
afterFormatChange: (cell: string, format: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id of a cell
- `format` - (mandatory) a new format applied for a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterFormatChange" event
spreadsheet.events.on("afterFormatChange", function(cell, format){
 console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" has changed");
 console.log(cell, format);
});
~~~

**Related sample:** [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)

**Related articles:** [Number formatting](number_formatting.md)
