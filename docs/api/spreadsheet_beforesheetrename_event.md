---
sidebar_label: beforeSheetRename
title: beforeSheetRename event
description: You can learn about the beforeSheetRename event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetRename

### Description

@short: Fires before a sheet is renamed

### Usage

~~~jsx
beforeSheetRename: (sheet: object, value: string) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) an object with the old name of a sheet and its id
- `value` - (required) the new name of the sheet

### Returns

Return `true` to rename a sheet, `false` to prevent the sheet from being renamed

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetRename" event
spreadsheet.events.on("beforeSheetRename", function(sheet, value) {
    console.log("The ", sheet.name, "sheet will be renamed to ", value);
    console.log(sheet, value);
    return true;
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)