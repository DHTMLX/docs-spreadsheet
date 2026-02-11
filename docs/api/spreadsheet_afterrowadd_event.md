---
sidebar_label: afterRowAdd
title: afterRowAdd event
description: You can learn about the afterRowAdd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterRowAdd

:::caution
The **afterRowAdd** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addRow") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview/)**. 
:::

### Description

@short: Fires after a new row is added

### Usage

~~~jsx
afterRowAdd: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterRowAdd" event
spreadsheet.events.on("afterRowAdd", function(cell){
    console.log("A new row is added");
    console.log(cell);
});
~~~

**Related articles:** [Event handling](/handling_events)