---
sidebar_label: beforeSelectionSet
title: beforeSelectionSet event
description: You can learn about the beforeSelectionSet event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSelectionSet

### Description

@short: Fires before cells are selected

### Usage

~~~jsx
beforeSelectionSet: (cell: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id(s) of a cell(s)

### Returns

Return `true` to select cells, `false` to prevent selection of cells

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeSelectionSet" event
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Related articles:** [Event handling](handling_events.md)