---
sidebar_label: afterFocusSet
title: afterFocusSet event
description: You can learn about the afterFocusSet event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterFocusSet" event
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**Related articles:** [Event handling](/handling_events)