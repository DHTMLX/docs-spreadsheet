---
sidebar_label: afterSheetChange
title: afterSheetChange event
description: You can learn about the afterSheetChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetChange

### Description

@short: Fires after the currently active sheet is changed

### Usage

~~~jsx
afterSheetChange: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) the object of the newly active sheet

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the name of the newly active sheet
- **id** - (*string*) the id of the newly active sheet
:::

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetChange" event
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)