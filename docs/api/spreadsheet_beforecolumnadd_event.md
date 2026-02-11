---
sidebar_label: beforeColumnAdd
title: beforeColumnAdd event
description: You can learn about the beforeColumnAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeColumnAdd

:::caution
The **beforeColumnAdd** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview/)**. 
:::

### Description

@short: Fires before a new column is added

### Usage

~~~jsx
beforeColumnAdd: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

`cell` - (required) the id of a cell

### Returns

Return `true` to add a column, `false` to prevent adding of a column

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeColumnAdd" event
spreadsheet.events.on("beforeColumnAdd", function(cell){
    console.log("A new column will be added");
    console.log(cell);
    return true;
});
~~~

**Related articles:** [Event handling](/handling_events)