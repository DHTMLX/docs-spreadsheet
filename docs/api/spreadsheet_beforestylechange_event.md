---
sidebar_label: beforeStyleChange
title: beforeStyleChange event
description: You can learn about the beforeStyleChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeStyleChange

:::caution
The **beforeStyleChange** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~js
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "setCellStyle") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires before the style of cells is changed

### Usage

~~~jsx
beforeStyleChange: (
	cell: string, 
	style: string | object | array 
) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id(s) of a cell(s)
- `style` - (required) styles set for a cell/cells

### Returns

Return `true` to change the style of a cell, `false` to prevent changing of style

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeStyleChange" event
spreadsheet.events.on("beforeStyleChange", function(cell, style){
	console.log("Style of cell "+spreadsheet.selection.getSelectedCell()+" will change");
	console.log(cell, style);
	return true;
});
~~~

**Related articles:** [Event handling](handling_events.md)