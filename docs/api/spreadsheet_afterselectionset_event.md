---
sidebar_label: afterSelectionSet
title: afterSelectionSet event
description: You can learn about the afterSelectionSet event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSelectionSet

### Description

@short: fires after cells are selected

### Usage

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (mandatory) the id(s) of a cell(s)

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSelectionSet" event
spreadsheet.events.on("afterSelectionSet", function(cell){
 	console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
	console.log(cell);
});
~~~

