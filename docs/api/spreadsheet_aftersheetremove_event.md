---
sidebar_label: afterSheetRemove
title: afterSheetRemove event
description: You can learn about the afterSheetRemove event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetRemove

### Description

@short: Fires after a sheet is removed

### Usage

~~~jsx
afterSheetRemove: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object with the name and id of a sheet

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetRemove" event
spreadsheet.events.on("afterSheetRemove", function(sheet) {
    console.log("The " + sheet.name + "sheet is removed");
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)