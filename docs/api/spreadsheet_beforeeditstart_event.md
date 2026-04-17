---
sidebar_label: beforeEditStart
title: beforeEditStart event
description: You can learn about the beforeEditStart event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeEditStart

### Description

@short: Fires before editing of a cell has started

### Usage

~~~jsx
beforeEditStart: (cell: string, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `value` - (required) the value of a cell

### Returns

Return `true` to edit a cell, `false` to prevent editing

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeEditStart" event
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Related articles:** [Event handling](/handling_events)