---
sidebar_label: beforeFocusSet
title: beforeFocusSet event
description: You can learn about the beforeFocusSet event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeFocusSet" event
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**Related articles:** [Event handling](handling_events.md)