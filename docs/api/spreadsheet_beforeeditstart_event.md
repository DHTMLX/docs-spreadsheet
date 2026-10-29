---
sidebar_label: beforeEditStart
title: beforeEditStart event
description: Control which cells can be edited in DHTMLX Spreadsheet with the beforeEditStart event, and return false to prevent the editor from opening.
---

# beforeEditStart

### Description

@short: Fires before editing of a cell starts

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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeEditStart" event
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**Related article:** [Event handling](handling_events.md)