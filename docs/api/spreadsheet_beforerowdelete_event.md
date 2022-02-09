---
sidebar_label: beforeRowDelete
title: beforeRowDelete event
description: You can learn about the beforeRowDelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeRowDelete

### Description

@short: Fires before a row is deleted

### Usage

~~~jsx
beforeRowDelete: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Returns

Return `true` to delete a row, `false` to prevent deleting of a row

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeRowDelete" event
spreadsheet.events.on("beforeRowDelete", function(cell){
	console.log("A row will be deleted");
    console.log(cell);
    return true;
});
~~~

**Related articles:** [Event handling](handling_events.md)