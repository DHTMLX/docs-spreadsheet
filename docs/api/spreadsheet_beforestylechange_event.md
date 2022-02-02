---
sidebar_label: beforeStyleChange
title: beforeStyleChange event
description: You can learn about the beforeStyleChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeStyleChange

### Description

@short: fires before the style of cells is changed

### Usage

~~~jsx
beforeStyleChange: (
	cell: string, 
	style: string | object | array 
) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id(s) of a cell(s)
- `style` - (mandatory) styles set for a cell/cells

### Returns

***True*** to change the style of a cell, ***false*** to prevent changing of style.

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeStyleChange" event
spreadsheet.events.on("beforeStyleChange", function(cell, style){
	console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" will change");
	console.log(cell, style);
	return true;
});
~~~

:::info
The event is blockable, returning ***false*** will prevent changing of style.
:::