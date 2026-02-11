---
sidebar_label: afterRowDelete
title: afterRowDelete event
description: You can learn about the afterRowDelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterRowDelete

:::caution
The **afterRowDelete** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "deleteRow") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview/)**. 
:::

### Description

@short: Fires after a row is deleted

### Usage

~~~jsx
afterRowDelete: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterRowDelete" event
spreadsheet.events.on("afterRowDelete", function(cell){
    console.log("A row was deleted");
    console.log(cell);
});
~~~

**Related articles:** [Event handling](/handling_events)