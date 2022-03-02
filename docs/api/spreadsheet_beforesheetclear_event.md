---
sidebar_label: beforeSheetClear
title: beforeSheetClear event
description: You can learn about the beforeSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetClear

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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetClear" event
spreadsheet.events.on("beforeSheetClear", function(sheet){
    console.log("The " + sheet.name + " sheet will be cleared");
    console.log(sheet);
    return true;
});
~~~

**Changelog:** Added in v4.2

**Related articles:** [Event handling](handling_events.md)