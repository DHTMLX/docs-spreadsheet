---
sidebar_label: beforeValueChange
title: beforeValueChange event
description: You can learn about the beforeValueChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeValueChange

### Description

@short: fires before the values of cells are changed

### Usage

~~~jsx
beforeValueChange: (cell: string, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` -  (mandatory) the id of a cell
- `value` - (mandatory) the value of a cell

### Returns

***True*** to change the value of a cell, ***false*** to prevent changing of value.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeValueChange" event
spreadsheet.events.on("beforeValueChange", function(cell, value){
    console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" will change");
    console.log(cell, value);
    return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent changing of value(s).
:::