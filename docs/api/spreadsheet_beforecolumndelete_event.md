---
sidebar_label: beforeColumnDelete
title: beforeColumnDelete event
description: You can learn about the beforeColumnDelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeColumnDelete

### Description

@short: Fires before a column is deleted

### Usage

~~~jsx
beforeColumnDelete: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Returns

Return `true` to delete a column, `false` to prevent deleting of a column

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeColumnDelete" event
spreadsheet.events.on("beforeColumnDelete", function(cell){
	console.log("A column will be deleted");
    console.log(cell);
    return true;
});
~~~

**Related articles:** [Event handling](handling_events.md)