---
sidebar_label: afterColumnDelete
title: afterColumnDelete event
description: You can learn about the afterColumnDelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterColumnDelete

:::caution
The **afterColumnDelete** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "deleteColumn") {
        console.log(actionName, config)
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview)**. 
:::

### Description

@short: Fires after a column is deleted

### Usage

~~~jsx
afterColumnDelete: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterColumnDelete" event
spreadsheet.events.on("afterColumnDelete", function(cell){
    console.log("A column was deleted");
    console.log(cell);
});
~~~

**Related articles:** [Event handling](/handling_events)