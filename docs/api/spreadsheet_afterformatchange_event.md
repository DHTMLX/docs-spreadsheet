---
sidebar_label: afterFormatChange
title: afterFormatChange event
description: You can learn about the afterFormatChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterFormatChange

:::caution
The **afterFormatChange** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "setCellFormat") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](/api/overview/actions_overview/)**. 
:::

### Description

@short: Fires after the format of a cell is changed

### Usage

~~~jsx
afterFormatChange: (cell: string, format: string) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `cell` - (required) the id of a cell
- `format` - (required) a new format applied for a cell

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "afterFormatChange" event
spreadsheet.events.on("afterFormatChange", function(cell, format){
    console.log("Format of cell "+spreadsheet.selection.getSelectedCell()+" has changed");
    console.log(cell, format);
});
~~~

**Related articles:** 
- [Number formatting](/number_formatting)
- [Event handling](/handling_events)

**Related sample:** [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)