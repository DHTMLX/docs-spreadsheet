---
sidebar_label: beforeFormatChange
title: beforeFormatChange event
description: You can learn about the beforeFormatChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeFormatChange

### Description

@short: Fires before the format of a cell is changed

### Usage

~~~jsx
beforeFormatChange: (cell: string, format: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `format` - (required) a new format applied for a cell

### Returns

Return `true` to change the format, `false` to prevent changing of the format

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeFormatChange" event
spreadsheet.events.on("beforeFormatChange", function(cell, format){
    console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" will change");
    console.log(cell, format);
});
~~~

**Related articles:** 
- [Number formatting](number_formatting.md)
- [Event handling](handling_events.md)

**Related sample**: [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)


