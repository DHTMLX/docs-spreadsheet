---
sidebar_label: afterStyleChange
title: afterStyleChange event
description: You can learn about the afterStyleChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterStyleChange

### Description

@short: fires after the style of a cell is changed

### Usage

~~~jsx
afterStyleChange: (cell: string, style: object | array) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id of a cell
- `style` - (mandatory) styles set for a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterStyleChange" event
spreadsheet.events.on("afterStyleChange", function(cell, style){
    console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" is changed");
    console.log(cell, style));
});
~~~
