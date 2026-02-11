---
sidebar_label: afterColumnAdd
title: afterColumnAdd event
description: You can learn about the afterColumnAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterColumnAdd

:::caution
The **afterColumnAdd** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config)
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview/)**. 
:::

### Description

@short: Fires after a new column is added

### Usage

~~~jsx
afterColumnAdd: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterColumnAdd" event
spreadsheet.events.on("afterColumnAdd", function(cell){
    console.log("A new column is added");
    console.log(cell);
});
~~~

**Related articles:** [Event handling](/handling_events)