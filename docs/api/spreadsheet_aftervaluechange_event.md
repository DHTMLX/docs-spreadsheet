---
sidebar_label: afterValueChange
title: afterValueChange event
description: You can learn about the afterValueChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterValueChange

:::caution
The **afterValueChange** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "setCellValue") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview)**. 
:::

### Description

@short: Fires after the value of a cell changes

### Usage

~~~jsx
afterValueChange: (cell: string, value: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `value` - (required) the value of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterValueChange" event
spreadsheet.events.on("afterValueChange", function(cell, value){
 console.log("Value of cell "+ spreadsheet.selection.getSelectedCell()+" has changed");
 console.log(cell, value);
});
~~~

**Related articles:** [Event handling](/handling_events)
