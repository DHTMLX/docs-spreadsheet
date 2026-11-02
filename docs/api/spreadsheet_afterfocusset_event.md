---
sidebar_label: afterFocusSet
title: afterFocusSet event
description: Track the focused cell in DHTMLX Spreadsheet with the afterFocusSet event, which fires after the focus is set on a cell and receives the cell id.
---

# afterFocusSet

### Description

@short: Fires after focus is set on a cell

### Usage

~~~jsx
afterFocusSet: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterFocusSet" event
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Related article:** [Event handling](handling_events.md)