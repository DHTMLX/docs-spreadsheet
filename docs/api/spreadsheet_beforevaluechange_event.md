---
sidebar_label: beforeValueChange
title: beforeValueChange event
description: You can learn about the beforeValueChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeValueChange

:::caution
The **beforeValueChange** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "setCellValue") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](../../api/overview/actions_overview/)**. 
:::

### Description

@short: Fires before the values of cells are changed

### Usage

~~~jsx
beforeValueChange: (cell: string, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` -  (required) the id of a cell
- `value` - (required) the value of a cell

### Returns

Return `true` to change the value of a cell, `false` to prevent changing of value

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeValueChange" event
spreadsheet.events.on("beforeValueChange", function(cell, value){
    console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" will change");
    console.log(cell, value);
    return true;
});
~~~

**Related articles:** [Event handling](/handling_events)