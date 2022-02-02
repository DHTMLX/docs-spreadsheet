---
sidebar_label: afterValueChange
title: afterValueChange event
description: You can learn about the afterValueChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterValueChange

### Description

@short: fires after the value of a cell changes

### Usage

~~~jsx
afterValueChange: (cell: string, value: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id of a cell
- `value` - (mandatory) the value of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterValueChange" event
spreadsheet.events.on("afterValueChange", function(cell, value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
 console.log(cell, value);
});
~~~

