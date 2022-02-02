---
sidebar_label: beforeRowAdd
title: beforeRowAdd event
description: You can learn about the beforeRowAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeRowAdd

### Description

@short: fires before a new row is added

### Usage

~~~jsx
beforeRowAdd: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id of a cell

### Returns

***True*** to add a row, ***false*** to prevent adding of a row.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeRowAdd" event
spreadsheet.events.on("beforeRowAdd", function(cell){
	console.log("A new row will be added");
    console.log(cell);
    return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent adding of a row.
:::