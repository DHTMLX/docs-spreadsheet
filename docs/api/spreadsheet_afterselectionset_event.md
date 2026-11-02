---
sidebar_label: afterSelectionSet
title: afterSelectionSet event
description: React to the selection of cells in DHTMLX Spreadsheet with the afterSelectionSet event, which fires after cells are selected and receives their ids.
---

# afterSelectionSet

### Description

@short: Fires after cells are selected

### Usage

~~~jsx
afterSelectionSet: (cell: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id(s) of a cell(s)

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterSelectionSet" event
spreadsheet.events.on("afterSelectionSet", function(cell){
     console.log("The cells " + spreadsheet.selection.getSelectedCell() + " are selected");
    console.log(cell);
});
~~~

**Related article:** [Event handling](handling_events.md)
