---
sidebar_label: afterEditEnd
title: afterEditEnd event
description: You can learn about the afterEditEnd event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterEditEnd

### Description

@short: Fires after editing of a cell is finished

### Usage

~~~jsx
afterEditEnd: (cell: string, value: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `value` - (required) the value of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterEditEnd" event
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**Related articles:** [Event handling](handling_events.md)