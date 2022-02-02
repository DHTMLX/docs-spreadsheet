---
sidebar_label: beforeEditEnd
title: beforeEditEnd event
description: You can learn about the beforeEditEnd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeEditEnd

### Description

@short: fires before editing of a cell is finished

### Usage

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id of a cell
- `value` - (mandatory) the value of a cell

### Returns

***True*** to finish editing a cell, ***false*** to prevent closing of an editor.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeEditEnd" event
spreadsheet.events.on("beforeEditEnd", function(cell, value){
 	console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent closing of an editor.
:::