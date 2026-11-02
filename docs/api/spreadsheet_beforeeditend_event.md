---
sidebar_label: beforeEditEnd
title: beforeEditEnd event
description: Check a cell value before editing ends in DHTMLX Spreadsheet with the beforeEditEnd event, and return false to keep the editor open.
---

# beforeEditEnd

### Description

@short: Fires before editing of a cell is finished

### Usage

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `value` - (required) the value of a cell

### Returns

Return `true` to finish editing a cell, `false` to prevent closing of an editor

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeEditEnd" event
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**Related article:** [Event handling](handling_events.md)