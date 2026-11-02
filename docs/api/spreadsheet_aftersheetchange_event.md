---
sidebar_label: afterSheetChange
title: afterSheetChange event
description: Track the switching of sheets in DHTMLX Spreadsheet with the afterSheetChange event, which receives the name and id of the newly active sheet.
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

- `sheet` - (required) an object with the name and id of a newly active sheet

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe on the "afterSheetChange" event
spreadsheet.events.on("afterSheetChange", function(sheet) {
    console.log("The newly active sheet is " + sheet.name);
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related article:** [Event handling](handling_events.md)