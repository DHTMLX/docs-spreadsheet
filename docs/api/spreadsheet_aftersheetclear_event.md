---
sidebar_label: afterSheetClear
title: afterSheetClear event
description: You can learn about the afterSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetClear

:::caution
The **afterSheetClear** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~js
spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "clearSheet") {
        console.log(actionName, config);
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires after a sheet of the spreadsheet is cleared

### Usage

~~~jsx
afterSheetClear: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object with the name and id of a sheet

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetClear" event
spreadsheet.events.on("afterSheetClear", function(sheet){
    console.log("The " + sheet.name + " is cleared");
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.2

**Related articles:** [Event handling](handling_events.md)