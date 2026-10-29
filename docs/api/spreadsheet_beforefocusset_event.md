---
sidebar_label: beforeFocusSet
title: beforeFocusSet event
description: Control the focus in DHTMLX Spreadsheet with the beforeFocusSet event, which fires before a cell gets the focus and prevents it when the handler returns false.
---

# beforeFocusSet

### Description

@short: Fires before focus is set on a cell

### Usage

~~~jsx
beforeFocusSet: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Returns

Return `true` to set focus on a cell, `false` to prevent setting focus

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeFocusSet" event
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**Related article:** [Event handling](handling_events.md)