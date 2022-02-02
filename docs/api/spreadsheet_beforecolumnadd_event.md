---
sidebar_label: beforeColumnAdd
title: beforeColumnAdd event
description: You can learn about the beforeColumnAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeColumnAdd

### Description

@short: fires before a new column is added

### Usage

~~~jsx
beforeColumnAdd: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

`cell` - (mandatory) the id of a cell

### Returns

***True*** to add a column, ***false*** to prevent adding of a column.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeColumnAdd" event
spreadsheet.events.on("beforeColumnAdd", function(cell){
	console.log("A new column will be added");
    console.log(cell);
    return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent adding of a column.
:::