---
sidebar_label: beforeSheetClear
title: beforeSheetClear event
description: You can learn about the beforeSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetClear

:::caution
The **beforeSheetClear** event has been deprecated in v4.3. The event will continue work, but you'd better apply a new approach:

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "clearSheet") {
        console.log(actionName, config);
        return false;
    }
});
~~~

For more details about the new concept, see **[Spreadsheet actions](api/overview/actions_overview.md)**. 
:::

### Description

@short: Fires before a sheet of the spreadsheet is cleared

### Usage

~~~jsx
beforeSheetClear: (sheet: object) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object  with the name and id of a sheet

### Returns

Return `true` to clear the active sheet, `false` to prevent the active sheet from being cleared

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// subscribe on the "beforeSheetClear" event
spreadsheet.events.on("beforeSheetClear", function(sheet){
    console.log("The " + sheet.name + " sheet will be cleared");
    console.log(sheet);
    return true;
});
~~~

**Changelog:** Added in v4.2

**Related articles:** [Event handling](handling_events.md)