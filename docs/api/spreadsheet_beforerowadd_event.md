---
sidebar_label: beforeRowAdd
title: beforeRowAdd event
description: You can learn about the beforeRowAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeRowAdd

:::caution
The **beforeRowAdd** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addRow") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](../../api/overview/actions_overview/)**. 
:::

### Description

@short: Fires before a new row is added

### Usage

~~~jsx
beforeRowAdd: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Returns

Return `true` to add a row, `false` to prevent adding of a row

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeRowAdd" event
spreadsheet.events.on("beforeRowAdd", function(cell){
    console.log("A new row will be added");
    console.log(cell);
    return true;
});
~~~

**Related articles:** [Event handling](/handling_events)