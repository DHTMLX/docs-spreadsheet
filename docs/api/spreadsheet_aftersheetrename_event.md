---
sidebar_label: afterSheetRename
title: afterSheetRename event
description: You can learn about the afterSheetRename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# afterSheetRename

### Description

@short: Fires after a sheet is renamed

### Usage

~~~jsx
afterSheetRename: (sheet: object) => void;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) the object of a sheet

:::info
The **sheet** object contains the following parameters:

- **name** - (*string*) the new name of the sheet
- **id** - (*string*) the id of the sheet
:::

### Example

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "afterSheetRename" event
spreadsheet.events.on("afterSheetRename", function(sheet) {
    console.log("The sheet is renamed to", sheet.name );
    console.log(sheet);
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)