---
sidebar_label: afterSheetClear
title: afterSheetClear event
description: You can learn about the afterSheetClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetClear

### Description

@short: fires after a sheet of the spreadsheet is cleared

### Usage

~~~jsx
afterSheetClear: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (mandatory) the object of a sheet

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
