---
sidebar_label: beforeSheetChange
title: beforeSheetChange event
description: You can learn about the beforeSheetChange event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeSheetChange

### Description

@short: Fires before changing the currently active sheet

### Usage

~~~jsx
beforeSheetChange: (sheet: object) => void | boolean;
~~~

### Parameters

The callback of the event takes the following parameters:

- `sheet` - (required) the object of the currently active sheet

:::info
The sheet object contains the following parameters:

- **name** - (*string*) the name of the currently active sheet
- **id** - (*string*) the id of the sheet
:::

### Returns

Return `true` to change the active sheet, `false` to prevent the active sheet from being changed

### Example

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
// subscribe on the "beforeSheetChange" event
spreadsheet.events.on("beforeSheetChange", function(sheet) {
    console.log("The active sheet will be changed");
    console.log(sheet);
    return true;
});
~~~

**Changelog:** Added in v4.1

**Related articles:** [Event handling](handling_events.md)