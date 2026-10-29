---
sidebar_label: afterEditEnd
title: afterEditEnd event
description: Handle the end of cell editing in DHTMLX Spreadsheet with the afterEditEnd event, which receives the id of the cell and its new value.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterEditEnd" event
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**Related article:** [Event handling](handling_events.md)