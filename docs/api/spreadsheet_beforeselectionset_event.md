---
sidebar_label: beforeSelectionSet
title: beforeSelectionSet event
description: Control the selection of cells in DHTMLX Spreadsheet with the beforeSelectionSet event, which fires before cells are selected and prevents it when the handler returns false.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "beforeSelectionSet" event
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**Related article:** [Event handling](handling_events.md)