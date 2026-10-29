---
sidebar_label: afterEditStart
title: afterEditStart event
description: Handle the start of cell editing in DHTMLX Spreadsheet with the afterEditStart event, which receives the id of the cell and its value.
---

# afterEditStart

### Description

@short: Fires after editing of a cell starts

### Usage

~~~jsx
afterEditStart: (cell: string, value: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `value` - (required) the value of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterEditStart" event
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**Related article:** [Event handling](handling_events.md)