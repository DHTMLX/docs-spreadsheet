---
sidebar_label: groupFill
title: groupFill event
description: Handle the auto filling of cells in DHTMLX Spreadsheet with the groupFill event, which passes the focused cell and the selected cells to the callback.
---

# groupFill

### Description

@short: Fires on auto filling of cells

### Usage

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `focusedCell` - (required) the id of a cell in focus
- `selectedCell` - (required) the ids of the selected cells

### Example

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "groupFill" event
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**Related article:** [Event handling](handling_events.md)