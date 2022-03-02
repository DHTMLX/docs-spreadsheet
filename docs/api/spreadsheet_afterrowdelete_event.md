---
sidebar_label: afterRowDelete
title: afterRowDelete event
description: You can learn about the afterRowDelete event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterRowDelete

### Description

@short: Fires after a row is deleted

### Usage

~~~jsx
afterRowDelete: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterRowDelete" event
spreadsheet.events.on("afterRowDelete", function(cell){
	console.log("A row was deleted");
	console.log(cell);
});
~~~

**Related articles:** [Event handling](handling_events.md)