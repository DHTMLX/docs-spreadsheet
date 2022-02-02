---
sidebar_label: groupFill
title: groupFill event
description: You can learn about the groupFill event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# groupFill

### Description

@short: fires on auto filling of cells

### Usage

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `focusedCell` - (mandatory) the id of a cell in focus
- `selectedCell` - (mandatory) the ids of a selected cells

### Example

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "groupFill" event
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~
